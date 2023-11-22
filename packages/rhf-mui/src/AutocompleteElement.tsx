import {
  Control,
  FieldError,
  FieldValues,
  FieldPath,
  UseControllerProps,
  useController,
} from 'react-hook-form'
import {
  Autocomplete,
  AutocompleteProps,
  Checkbox,
  TextField,
  TextFieldProps,
  useForkRef,
} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import {useFormError} from './FormErrorProvider'
import {ReactNode, RefAttributes, forwardRef, Ref} from 'react'

type AutoDefault = {
  id: string | number // must keep id in case of keepObject
  label: string
}

export type AutocompleteElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  Value = AutoDefault | string | any,
  Multiple extends boolean | undefined = boolean | undefined,
  DisableClearable extends boolean | undefined = boolean | undefined,
  FreeSolo extends boolean | undefined = boolean | undefined
> = {
  name: TName
  control?: Control<TFieldValues>
  options: Value[]
  loading?: boolean
  multiple?: Multiple
  matchId?: boolean
  loadingIndicator?: ReactNode
  rules?: UseControllerProps<TFieldValues, TName>['rules']
  parseError?: (error: FieldError) => ReactNode
  required?: boolean
  label?: TextFieldProps['label']
  showCheckbox?: boolean
  autocompleteProps?: Omit<
    AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo>,
    'name' | 'options' | 'loading' | 'renderInput'
  >
  textFieldProps?: Omit<TextFieldProps, 'name' | 'required' | 'label'>
}

type AutocompleteElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: AutocompleteElementProps<
    TFieldValues,
    TName,
    AutoDefault | string | any,
    boolean | undefined,
    boolean | undefined,
    boolean | undefined
  > &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const AutocompleteElement = forwardRef(function AutocompleteElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: AutocompleteElementProps<
    TFieldValues,
    TName,
    AutoDefault | string | any,
    boolean | undefined,
    boolean | undefined,
    boolean | undefined
  >,
  ref: Ref<HTMLDivElement>
) {
  const {
    textFieldProps,
    autocompleteProps,
    name,
    control,
    options,
    loading,
    showCheckbox,
    rules,
    loadingIndicator,
    required,
    multiple,
    matchId,
    label,
    parseError,
  } = props

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn

  const validationRules = {
    ...rules,
    ...(required && {
      required: rules?.required || 'This field is required',
    }),
  }

  const loadingElement = loadingIndicator || (
    <CircularProgress color="inherit" size={20} />
  )

  const {
    field,
    fieldState: {error},
  } = useController({
    name,
    control,
    rules: validationRules,
  })

  const handleInputRef = useForkRef(field.ref, textFieldProps?.inputRef)

  let currentValue = multiple ? field.value || [] : field.value ?? null

  if (matchId) {
    currentValue = multiple
      ? (field.value || []).map((i: any) =>
          options.find((j) => (j.id ?? j) === i)
        )
      : options.find((i) => (i.id ?? i) === field.value) ?? null
  }

  return (
    <Autocomplete
      {...autocompleteProps}
      value={currentValue}
      loading={loading}
      multiple={multiple}
      options={options}
      disableCloseOnSelect={
        typeof autocompleteProps?.disableCloseOnSelect === 'boolean'
          ? autocompleteProps.disableCloseOnSelect
          : !!multiple
      }
      isOptionEqualToValue={
        autocompleteProps?.isOptionEqualToValue
          ? autocompleteProps.isOptionEqualToValue
          : (option, value) => {
              return value ? option.id === (value?.id ?? value) : false
            }
      }
      getOptionLabel={
        autocompleteProps?.getOptionLabel
          ? autocompleteProps.getOptionLabel
          : (option) => {
              return `${option?.label ?? option}`
            }
      }
      onChange={(event, value, reason, details) => {
        let changedVal = value
        if (matchId) {
          changedVal = Array.isArray(value)
            ? value.map((i: any) => i?.id ?? i)
            : value?.id ?? value
        }
        field.onChange(changedVal)
        if (autocompleteProps?.onChange) {
          autocompleteProps.onChange(event, value, reason, details)
        }
      }}
      ref={ref}
      renderOption={
        autocompleteProps?.renderOption ??
        (showCheckbox
          ? (props, option, {selected}) => (
              <li {...props}>
                <Checkbox sx={{marginRight: 1}} checked={selected} />
                {autocompleteProps?.getOptionLabel?.(option) ||
                  option.label ||
                  option}
              </li>
            )
          : undefined)
      }
      onBlur={(event) => {
        field.onBlur()
        if (typeof autocompleteProps?.onBlur === 'function') {
          autocompleteProps.onBlur(event)
        }
      }}
      renderInput={(params) => (
        <TextField
          name={name}
          required={rules?.required ? true : required}
          label={label}
          {...textFieldProps}
          {...params}
          error={!!error}
          InputLabelProps={{
            ...params.InputLabelProps,
            ...textFieldProps?.InputLabelProps,
          }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? loadingElement : null}
                {params.InputProps.endAdornment}
              </>
            ),
            ...textFieldProps?.InputProps,
          }}
          inputProps={{
            ...params.inputProps,
            ...textFieldProps?.inputProps,
          }}
          helperText={
            error
              ? typeof customErrorFn === 'function'
                ? customErrorFn(error)
                : error.message
              : textFieldProps?.helperText
          }
          inputRef={handleInputRef}
        />
      )}
    />
  )
}) as AutocompleteElementComponent

export default AutocompleteElement
