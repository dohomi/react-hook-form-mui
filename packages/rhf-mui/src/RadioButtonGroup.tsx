import {forwardRef, ReactNode, Ref, RefAttributes} from 'react'
import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  PathValue,
  useController,
} from 'react-hook-form'
import {
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  Radio,
  RadioGroup,
  RadioGroupProps,
  useTheme,
} from '@mui/material'
import {useFormError} from './FormErrorProvider'
import useTransform from './useTransform'

export type RadioButtonGroupProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown
> = {
  options: TValue[]
  helperText?: ReactNode
  name: TName
  required?: boolean
  parseError?: (error: FieldError) => ReactNode
  label?: string
  labelKey?: string
  valueKey?: string
  type?: 'number' | 'string'
  emptyOptionLabel?: string
  onChange?: (value: TValue | string | undefined) => void
  returnObject?: boolean
  row?: boolean
  control?: Control<TFieldValues>
  labelProps?: Omit<FormControlLabelProps, 'label' | 'control' | 'value'>
  formLabelProps?: Omit<FormLabelProps, 'required' | 'error'>
  disabled?: boolean
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue
    output?: (
      value: TValue | string | undefined
    ) => PathValue<TFieldValues, TName>
  }
}

type RadioButtonGroupComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown
>(
  props: RadioButtonGroupProps<TFieldValues, TName, TValue> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const RadioButtonGroup = forwardRef(function RadioButtonGroup<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown
>(
  props: RadioButtonGroupProps<TFieldValues, TName, TValue>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    helperText,
    options,
    label,
    name,
    parseError,
    labelKey = 'label',
    valueKey = 'id',
    required,
    emptyOptionLabel,
    returnObject,
    row,
    control,
    type,
    labelProps,
    disabled,
    formLabelProps,
    transform,
    ...rest
  } = props
  const theme = useTheme()

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn

  const {
    field,
    fieldState: {error},
  } = useController({
    name,
    rules: required ? {required: 'This field is required'} : undefined,
    disabled,
    control,
  })

  const {value, onChange} = useTransform<TFieldValues, TName, TValue | string>({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input:
        typeof transform?.input === 'function'
          ? transform.input
          : (value) => {
              return value || ('' as TValue)
            },
      output:
        typeof transform?.output === 'function'
          ? transform?.output
          : (_event, value) => value,
    },
  })

  const renderHelperText = error
    ? typeof customErrorFn === 'function'
      ? customErrorFn(error)
      : error.message
    : helperText

  const onRadioChange: RadioGroupProps['onChange'] = (event, radioValue) => {
    const returnValue = returnObject
      ? options.find((items) => items[valueKey] === radioValue)
      : radioValue
    onChange(event, returnValue)
    if (typeof rest.onChange === 'function') {
      rest.onChange(returnValue)
    }
  }

  return (
    <FormControl error={!!error} ref={ref}>
      {label && (
        <FormLabel {...formLabelProps} required={required} error={!!error}>
          {label}
        </FormLabel>
      )}
      <RadioGroup onChange={onRadioChange} name={name} row={row} value={value}>
        {emptyOptionLabel && (
          <FormControlLabel
            {...labelProps}
            control={
              <Radio
                sx={{
                  color: error ? theme.palette.error.main : undefined,
                }}
                checked={!value}
              />
            }
            label={emptyOptionLabel}
            value=""
          />
        )}
        {options.map((option: any) => {
          const optionKey = option[valueKey]
          if (!optionKey) {
            console.error(
              `CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`,
              option
            )
          }
          let val = returnObject ? value?.[valueKey] : value
          if (type === 'number') {
            val = Number(val)
          }
          const isChecked = val === optionKey
          return (
            <FormControlLabel
              {...labelProps}
              control={
                <Radio
                  sx={{
                    color: error ? theme.palette.error.main : undefined,
                  }}
                  disabled={disabled}
                  checked={isChecked}
                />
              }
              value={optionKey}
              label={option[labelKey]}
              key={optionKey}
            />
          )
        })}
      </RadioGroup>
      {renderHelperText && <FormHelperText>{renderHelperText}</FormHelperText>}
    </FormControl>
  )
})
RadioButtonGroup.displayName = 'RadioButtonGroup'

export default RadioButtonGroup as RadioButtonGroupComponent
