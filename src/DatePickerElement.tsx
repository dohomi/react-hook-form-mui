import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { Control, Controller, ControllerProps, FieldError } from 'react-hook-form'
import { TextField, TextFieldProps } from '@mui/material'

export declare type ParseableDate<TDate> =
  | string
  | number
  | Date
  | null
  | undefined
  | TDate;

export type DatePickerElementProps<TInputDate, TDate = TInputDate> = Omit<DatePickerProps<TInputDate, TDate>, 'value' | 'onChange' | 'renderInput'> & {
  name: string
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => string
  onChange?: (value: TDate, keyboardInputValue?: string) => void
  validation?: ControllerProps['rules']
  parseDate?: (value: TDate, keyboardInputValue?: string) => TDate
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
}: DatePickerElementProps<any, any>): JSX.Element {

  if (required && !validation.required) {
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
          onChange={(value, keyboardInputValue) => {
            let newValue = undefined
            if (keyboardInputValue) {
              if (typeof parseDate === 'function') {
                newValue = parseDate(value, keyboardInputValue)
              } else {
                newValue = keyboardInputValue
              }
            } else {
              if (typeof parseDate === 'function') {
                newValue = parseDate(value)
              } else {
                newValue = value
              }
            }
            onChange(newValue, keyboardInputValue)
            if (typeof rest.onChange === 'function') {
              rest.onChange(newValue, keyboardInputValue)
            }
          }}
          renderInput={
            (params) =>
              <TextField
                {...params}
                inputProps={{
                  ...params?.inputProps,
                  ...(!value && {
                    value: ''
                  })
                }}
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
