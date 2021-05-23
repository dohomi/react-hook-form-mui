import React, { createElement } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { Controller, ControllerProps, FieldError } from 'react-hook-form'
import { TextField, TextFieldProps } from '@material-ui/core'

export type SelectElementProps = Omit<TextFieldProps, 'name' | 'variant' | 'type' | 'onChange'> & {
  validation?: ControllerProps['rules']
  name: string
  options?: any[]
  valueKey?: string
  labelKey?: string
  type?: 'string' | 'number'
  parseError?: (error: FieldError) => string
  objectOnChange?: boolean
  onChange?: (value: any) => void
}

export default function SelectElement({
  name,
  required,
  valueKey = 'id',
  labelKey = 'title',
  options = [],
  parseError,
  type,
  objectOnChange,
  validation = {},
  ...rest
}: SelectElementProps): JSX.Element {
  const isNativeSelect = !!rest.SelectProps?.native
  const ChildComponent = isNativeSelect ? 'option' : MenuItem
  if (required) {
    validation.required = 'This field is required'
  }
  return (
    <Controller
      name={name}
      rules={validation}
      render={({ field: { onBlur, onChange, value }, fieldState: { invalid, error } }) => {
        // handle shrink on number input fields
        if (type === 'number' && value) {
          rest.InputLabelProps = rest.InputLabelProps || {}
          rest.InputLabelProps.shrink = true
        }
        if (typeof value === 'object') {
          value = value[valueKey] // if value is object get key
        }
        return <TextField
          {...rest}
          name={name}
          value={value || ''}
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
