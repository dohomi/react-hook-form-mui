import React from 'react'
import { DatePicker, DatePickerProps } from '@material-ui/pickers'
import { Controller, ControllerProps, FieldError } from 'react-hook-form'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'


export type DatePickerElementProps = Omit<DatePickerProps, 'value' | 'onChange'> & {
  name: string
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => string
  onChange?: (value?: string | Date | MaterialUiPickersDate) => void
  validation?: ControllerProps['rules']
  parseDate?: (date: MaterialUiPickersDate) => string
}

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
          onChange={(date: MaterialUiPickersDate) => {
            let parsedDate = date?.toISOString().substr(0, 10)
            if (typeof parseDate === 'function') {
              parsedDate = parseDate(date)
            }
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
