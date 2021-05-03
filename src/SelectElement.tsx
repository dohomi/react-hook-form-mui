import React, { createElement } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { Controller, useFormContext } from 'react-hook-form'
import getNestedValue from './helpers/getNestedValue'
import getErrorMessages from './helpers/getErrorMessages'
import { SelectElementProps } from './formTypes'

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
  const { formState: { errors }, getValues, control, setValue } = useFormContext()
  const formValue: any = getNestedValue(getValues(), name)
  let value = formValue || ''
  if (value && typeof value === 'object') {
    value = value[valueKey] // if value is object get key
  }
  const isNativeSelect = !!(rest.SelectProps && rest.SelectProps.native)
  const ChildComponent = isNativeSelect ? 'option' : MenuItem
  if (required) {
    validation.required = 'This field is required'
  }
  const onChange = (event: any) => {
    let item: number | string = event.target.value
    if (type === 'number') {
      item = Number(item)
    }
    setValue(name, item, {shouldValidate:true})
    if (rest.onChange) {
      if (objectOnChange) {
        item = options.find(i => i[valueKey] === item)
      }
      rest.onChange && rest.onChange(item as any)
    }
  }

  // handle shrink on number input fields
  if (type === 'number' && value) {
    rest.InputLabelProps = rest.InputLabelProps || {}
    rest.InputLabelProps.shrink = true
  }
  const errorMessages = getErrorMessages(name, errors, parseError)
  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({ field }) => <TextField
        {...field}
        {...rest}
        select
        value={value}
        required={required}
        error={!!errorMessages}
        helperText={errorMessages || rest.helperText}
        InputProps={{
          onChange
        }}
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
      }
    />
  )
}
