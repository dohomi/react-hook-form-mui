import React from 'react'
import { DatePicker } from '@material-ui/pickers'
import { Controller } from 'react-hook-form'
import { DatePickerElementProps } from './formTypes'

export default function DatePickerElement({
  isDate,
  parseError,
  name,
  required,
  parseDate,
  validation = {},
  ...rest
}: DatePickerElementProps): JSX.Element {

  if (required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      render={({ field: { onBlur, onChange, value }, fieldState: { error, invalid } }) =>
        <DatePicker
          {...rest}
          value={value}
          required={!!required}
          onBlur={(ev) => {
            onBlur()
            if (typeof rest.onBlur === 'function') {
              rest.onBlur(ev)
            }
          }}
          onChange={(date) => {
            let parsedDate = date
            if (typeof parseDate === 'function') {
              parsedDate = parseDate(date)
            } else {
              parsedDate = date.toISOString().substr(0, 10)
            }
            console.log(date, parsedDate)
            onChange(parsedDate)
            if (typeof rest.onChange === 'function') {
              rest.onChange(parsedDate)
            }
          }}
          error={invalid}
          helperText={error ? (typeof parseError === 'function' ? parseError(error) : error.message) : rest.helperText}
        />}
    />
  )
}
