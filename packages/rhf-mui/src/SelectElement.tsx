import { createElement } from 'react'
import { MenuItem, TextField, TextFieldProps } from '@mui/material'
import { Control, Controller, ControllerProps, FieldError, Path } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types/fields'

export type SelectElementProps<T> = Omit<TextFieldProps, 'name' | 'type' | 'onChange'> & {
  validation?: ControllerProps['rules']
  name: Path<T>
  options?: { id: string | number, label: string | number }[] | any[]
  valueKey?: string
  labelKey?: string
  type?: 'string' | 'number'
  parseError?: (error: FieldError) => string
  objectOnChange?: boolean
  onChange?: (value: any) => void
  control?: Control<T>
}

export default function SelectElement<TFieldValues extends FieldValues>({
  name,
  required,
  valueKey = 'id',
  labelKey = 'label',
  options = [],
  parseError,
  type,
  objectOnChange,
  validation = {},
  control,
  ...rest
}: SelectElementProps<TFieldValues>): JSX.Element {
  const isNativeSelect = !!rest.SelectProps?.native
  const ChildComponent = isNativeSelect ? 'option' : MenuItem

  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({ field: { onBlur, onChange, value }, fieldState: { invalid, error } }) => {
        // handle shrink on number input fields
        if (type === 'number' && typeof value !== 'undefined') {
          rest.InputLabelProps = rest.InputLabelProps || {}
          rest.InputLabelProps.shrink = true
        }
        if (typeof value === 'object') {
          value = value[valueKey] // if value is object get key
        }
        return <TextField
          {...rest}
          name={name}
          value={value ?? ''}
          onBlur={onBlur}
          onChange={(event) => {
            let item: number | string = event.target.value
            if (type === 'number') {
              item = Number(item)
            }
            onChange(item)
            if (typeof rest.onChange === 'function') {
              if (objectOnChange) {
                item = options.find(i => i[valueKey] === item)
              }
              rest.onChange(item)
            }
          }}
          select
          required={required}
          error={invalid}
          helperText={error ? (typeof parseError === 'function' ? parseError(error) : error.message) : rest.helperText}
        >{isNativeSelect && <option />}
          {options.map((item: any) =>
            createElement(
              ChildComponent,
              {
                key: `${name}_${item[valueKey]}`,
                value: item[valueKey]
              },
              item[labelKey]
            )
          )}
        </TextField>
      }}
    />
  )
}
