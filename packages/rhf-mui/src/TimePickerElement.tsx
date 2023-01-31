import {TimePicker, TimePickerProps} from '@mui/x-date-pickers/TimePicker'
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form'
import {TextField, TextFieldProps} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'

export declare type ParseableDate<TDate> =
  | string
  | number
  | Date
  | null
  | undefined
  | TDate

export type TimePickerElementProps<
  T extends FieldValues,
  TInputDate,
  TDate = TInputDate
> = Omit<
  TimePickerProps<TInputDate, TDate>,
  'value' | 'onChange' | 'renderInput'
> & {
  name: Path<T>
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => string
  onChange?: (value: TDate, keyboardInputValue?: string) => void
  validation?: ControllerProps['rules']
  parseDate?: (value: TDate, keyboardInputValue?: string) => TDate
  control?: Control<T>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
}

export default function TimePickerElement<TFieldValues extends FieldValues>({
  parseError,
  name,
  required,
  parseDate,
  validation = {},
  inputProps,
  control,
  ...rest
}: TimePickerElementProps<TFieldValues, string | null>): JSX.Element {
  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({field: {onChange, value, ref}, fieldState: {error}}) => (
        <TimePicker
          {...rest}
          ref={(r) => {
            ref(r?.querySelector('input'))
          }}
          value={value || ''}
          onChange={(value, keyboardInputValue) => {
            let newValue: string | null = null
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
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params?.inputProps,
                ...(!value && {
                  value: '',
                }),
              }}
              {...inputProps}
              required={!!required}
              error={!!error}
              helperText={
                error
                  ? typeof parseError === 'function'
                    ? parseError(error)
                    : error.message
                  : inputProps?.helperText || rest.helperText
              }
            />
          )}
        />
      )}
    />
  )
}
