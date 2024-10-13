import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormGroup,
  FormHelperText,
  FormLabel,
  useTheme,
} from '@mui/material'
import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  PathValue,
  useController,
  UseControllerProps,
} from 'react-hook-form'
import {useFormError} from './FormErrorProvider'
import {forwardRef, ReactNode, Ref, RefAttributes} from 'react'
import {useTransform} from './useTransform'
import {propertyExists} from './utils'

export type CheckboxButtonGroupProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
> = {
  options: (TValue | unknown)[]
  helperText?: ReactNode
  name: TName
  required?: boolean
  parseError?: (error: FieldError) => ReactNode
  label?: string
  labelKey?: string
  valueKey?: string
  onChange?: (data: TValue[]) => void
  returnObject?: boolean
  disabled?: boolean
  row?: boolean
  control?: Control<TFieldValues>
  rules?: UseControllerProps<TFieldValues, TName>['rules']
  checkboxColor?: CheckboxProps['color']
  labelProps?: Omit<FormControlLabelProps, 'label' | 'control'>
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue[]
    output?: (value: TValue[]) => PathValue<TFieldValues, TName>
  }
  defaultValue?: TValue[]
}

type CheckboxButtonGroupComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
>(
  props: CheckboxButtonGroupProps<TFieldValues, TName, TValue> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const CheckboxButtonGroup = forwardRef(function CheckboxButtonGroup<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
>(
  props: CheckboxButtonGroupProps<TFieldValues, TName, TValue>,
  ref: Ref<HTMLDivElement>
) {
  const {
    helperText,
    options,
    label,
    name,
    parseError,
    required,
    labelKey = 'label',
    valueKey = 'id',
    returnObject,
    disabled,
    row,
    control,
    checkboxColor,
    rules,
    labelProps,
    transform,
    defaultValue = [],
    ...rest
  } = props

  const theme = useTheme()
  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn

  const {
    field,
    fieldState: {error, invalid},
  } = useController({
    name,
    rules: required ? {required: 'This field is required'} : rules,
    disabled,
    control,
    defaultValue: defaultValue as PathValue<TFieldValues, TName>,
  })

  const {value: selectedOptions, onChange} = useTransform<
    TFieldValues,
    TName,
    TValue[]
  >({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input:
        typeof transform?.input === 'function'
          ? transform.input
          : (value) => {
              return Array.isArray(value) ? value : ([] as TValue[])
            },
      output: transform?.output,
    },
  })

  const handleChange = (option: unknown) => {
    const optionValue = propertyExists(option, valueKey)
      ? option[valueKey]
      : option
    const existsAtIndex = selectedOptions.findIndex((selectedOption) => {
      const selectedOptionValue = propertyExists(selectedOption, valueKey)
        ? selectedOption[valueKey]
        : selectedOption
      return optionValue === selectedOptionValue
    })

    const newValues = (
      existsAtIndex === -1
        ? [...selectedOptions, option]
        : selectedOptions.filter((_, index) => existsAtIndex !== index)
    ).map((selectedOption) =>
      returnObject || !propertyExists(selectedOption, valueKey)
        ? selectedOption
        : selectedOption[valueKey]
    ) as TValue[]
    onChange(newValues)
    if (typeof rest.onChange === 'function') {
      rest.onChange(newValues)
    }
  }

  const renderHelperText = error
    ? typeof customErrorFn === 'function'
      ? customErrorFn(error)
      : error.message
    : helperText

  return (
    <FormControl error={invalid} required={required} ref={ref}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <FormGroup row={row}>
        {options.map((option) => {
          const optionValue = propertyExists(option, valueKey)
            ? option[valueKey]
            : option
          const optionLabel = propertyExists(option, labelKey)
            ? option[labelKey]
            : option

          const isChecked = selectedOptions.some((selectedOption) => {
            const selectedOptionValue = propertyExists(selectedOption, valueKey)
              ? selectedOption[valueKey]
              : selectedOption
            return selectedOptionValue === optionValue
          })

          return (
            <FormControlLabel
              {...labelProps}
              control={
                <Checkbox
                  sx={{
                    color: error ? theme.palette.error.main : undefined,
                  }}
                  color={checkboxColor}
                  value={optionValue}
                  checked={isChecked}
                  disabled={disabled}
                  onChange={() => handleChange(option)}
                />
              }
              label={optionLabel as ReactNode}
              key={`${optionValue}`}
            />
          )
        })}
      </FormGroup>
      {renderHelperText && <FormHelperText>{renderHelperText}</FormHelperText>}
    </FormControl>
  )
})
CheckboxButtonGroup.displayName = 'CheckboxButtonGroup'
export default CheckboxButtonGroup as CheckboxButtonGroupComponent
