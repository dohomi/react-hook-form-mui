import React from 'react'
import { DatePicker, DatePickerProps } from '@mui/lab'
import { Control, Controller, ControllerProps, FieldError } from 'react-hook-form'
import { TextField, TextFieldProps } from '@mui/material'

export declare type ParseableDate<TDate> =
  | string
  | number
  | Date
  | null
  | undefined
  | TDate;

export type DatePickerElementProps<TDate = unknown> = Omit<DatePickerProps, 'value' | 'onChange' | 'renderInput'> & {
  name: string
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => string
  onChange?: (value?: ParseableDate<TDate>) => void
  validation?: ControllerProps['rules']
  parseDate?: (date: ParseableDate<TDate>) => string
  control?: Control<any>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
}

export default function DatePickerElement({
  isDate,
  parseError,
  name,
  required,
  parseDate,
  validation = {},
  inputProps,
  control,
  ...rest
}: DatePickerElementProps): JSX.Element {

  if (required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error, invalid } }) =>
        <DatePicker
          {...rest}
          value={value || ''}
          onChange={(date: ParseableDate<any>, selectionState) => {
            let parsedDate = ''
            if (selectionState) {
              if (typeof parseDate === 'function') {
                parsedDate = parseDate(selectionState)
              }
            } else {
              parsedDate = date?.toISOString().substr(0, 10)
              if (typeof parseDate === 'function') {
                parsedDate = parseDate(date)
              }
            }
            onChange(parsedDate)
            if (typeof rest.onChange === 'function') {
              rest.onChange(parsedDate)
            }
          }}
          renderInput={
            (params) =>
              <TextField
                {...params}
                {...inputProps}
                required={!!required}
                error={invalid}
                helperText={
                  error
                    ? (typeof parseError === 'function' ? parseError(error) : error.message)
                    : inputProps?.helperText || rest.helperText
                }
              />
          }
        />}
    />
  )
}
