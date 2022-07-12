import {Control, Controller, ControllerProps, Path} from 'react-hook-form'
import {Autocomplete, AutocompleteProps, Checkbox, TextField, TextFieldProps} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import {FieldValues} from 'react-hook-form/dist/types/fields'
import {useRef} from 'react'

export type AutocompleteElementProps<F, T, M extends boolean | undefined, D extends boolean | undefined> = {
    name: Path<F>
    options: T[]
    loading?: boolean
    multiple?: M
    control?: Control<F>
    matchId?: boolean
    rules?: ControllerProps['rules']
    required?: boolean
    label?: TextFieldProps['label']
    showCheckbox?: boolean
    autocompleteProps?: Omit<AutocompleteProps<T, M, D, any>, 'name' | 'options' | 'loading' | 'renderInput'>
    textFieldProps?: Omit<TextFieldProps, 'name' | 'required' | 'label'>
}

type AutoDefault = {
    id: string | number // must keep id in case of keepObject
    label: string
}

export default function AutocompleteElement<TFieldValues extends FieldValues>({
  textFieldProps,
  autocompleteProps,
  name,
  control,
  options,
  loading,
  showCheckbox,
  rules,
  required,
  multiple,
  matchId,
  label
}: AutocompleteElementProps<TFieldValues, AutoDefault | string | any, boolean | undefined, boolean | undefined>) {
  const validationRules: ControllerProps['rules'] = {
    ...rules,
    ...(required && {
      required: rules?.required || 'This field is required'
    })
  }
  return (
    <Controller
      name={name}
      control={control}
      rules={validationRules}
      render={({field: {onChange, onBlur, value, ...fieldRest}, fieldState: {error}}) => {
        let currentValue = multiple ? value || [] : value || null
        if (matchId) {
          currentValue = multiple
            ? (value || []).map((i: any) => options.find((j) => (j.id || j) === i))
            : options.find((i) => (i.id || i) === value) || null
        }
        return (
          <Autocomplete
            {...autocompleteProps}
            value={currentValue}
            loading={loading}
            multiple={multiple}
            options={options}
            disableCloseOnSelect={typeof autocompleteProps?.disableCloseOnSelect === 'boolean' ? autocompleteProps.disableCloseOnSelect : !!multiple}
            isOptionEqualToValue={autocompleteProps?.isOptionEqualToValue ?
              autocompleteProps.isOptionEqualToValue :
              (option, value) => {
                return value ? option.id === (value?.id || value) : false
              }}
            getOptionLabel={autocompleteProps?.getOptionLabel ?
              autocompleteProps.getOptionLabel :
              (option) => {
                return `${option?.label || option}`
              }
            }
            onChange={(event, value, reason, details) => {
              let changedVal = value
              if (matchId) {
                changedVal = (Array.isArray(value))
                  ? value.map((i: any) => i?.id || i)
                  : value?.id || value
              }
              onChange(changedVal)
              if (autocompleteProps?.onChange) {
                autocompleteProps.onChange(event, value, reason, details)
              }
            }}
            renderOption={showCheckbox ? (props, option, {selected}) => (
              <li {...props}>
                <Checkbox
                  sx={{marginRight: 1}}
                  checked={selected}
                />
                {autocompleteProps?.getOptionLabel?.(option) || option.label || option}
              </li>
            ) : undefined}
            onBlur={(event) => {
              onBlur()
              if (typeof autocompleteProps?.onBlur === 'function') {
                autocompleteProps.onBlur(event)
              }
            }}
            renderInput={(params) => (
              <TextField name={name}
                required={rules?.required ? true : required}
                label={label}
                {...textFieldProps}
                {...params}
                error={!!error}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {loading ? <CircularProgress color="inherit" size={20}/> : null}
                      {params.InputProps.endAdornment}
                    </>
                  )
                }}
                helperText={error ? error.message : textFieldProps?.helperText}
              />
            )}
            {...fieldRest}
          />
        )
      }}/>
  )
}
