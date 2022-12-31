import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  useTheme,
} from '@mui/material'
import {Control, FieldError, Path, useController} from 'react-hook-form'
import {FieldValues} from 'react-hook-form/dist/types/fields'

export type CheckboxButtonGroupProps<T extends FieldValues> = {
  options: {id: string | number; label: string}[] | any[]
  helperText?: string
  name: Path<T>
  required?: boolean
  parseError?: (error: FieldError) => string
  label?: string
  labelKey?: string
  valueKey?: string
  onChange?: (data: any) => void
  returnObject?: boolean
  disabled?: boolean
  row?: boolean
  control?: Control<T>
  checkboxColor?: CheckboxProps['color']
}

export default function CheckboxButtonGroup<TFieldValues extends FieldValues>({
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
  ...rest
}: CheckboxButtonGroupProps<TFieldValues>): JSX.Element {
  const theme = useTheme()
  const {
    field: {value = [], onChange},
    fieldState: {invalid, error},
  } = useController({
    name,
    rules: required ? {required: 'This field is required'} : undefined,
    control,
  })

  helperText = error
    ? typeof parseError === 'function'
      ? parseError(error)
      : error.message
    : helperText

  const handleChange = (index: number | string) => {
    const newArray: (string | number)[] | any[] = [...value]
    const exists =
      value.findIndex((i: any) =>
        returnObject ? i[valueKey] === index : i === index
      ) === -1
    if (exists) {
      newArray.push(
        returnObject ? options.find((i) => i[valueKey] === index) : index
      )
    } else {
      newArray.splice(
        value.findIndex((i: any) =>
          returnObject ? i[valueKey] === index : i === index
        ),
        1
      )
    }
    // setValue(name, newArray, { shouldValidate: true })
    onChange(newArray)
    if (typeof rest.onChange === 'function') {
      rest.onChange(newArray)
    }
  }

  return (
    <FormControl error={invalid} required={required}>
      {label && <FormLabel error={invalid}>{label}</FormLabel>}
      <FormGroup row={row}>
        {options.map((option: any) => {
          const optionKey = option[valueKey]
          if (!optionKey) {
            console.error(
              `CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`,
              option
            )
          }
          const isChecked =
            value.findIndex((item: any) =>
              returnObject ? item[valueKey] === optionKey : item === optionKey
            ) !== -1
          return (
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: invalid ? theme.palette.error.main : undefined,
                  }}
                  color={checkboxColor || 'primary'}
                  value={optionKey}
                  checked={isChecked}
                  disabled={disabled}
                  onChange={() => handleChange(optionKey)}
                />
              }
              label={option[labelKey]}
              key={optionKey}
            />
          )
        })}
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
