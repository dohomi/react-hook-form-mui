import {DatePicker, DatePickerProps} from '@mui/x-date-pickers/DatePicker'
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form'
import {TextField, TextFieldProps} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'
import {mergeProps} from './utils'

export declare type ParseableDate<TDate> =
  | string
  | number
  | Date
  | null
  | undefined
  | TDate

export type DatePickerElementProps<
  T extends FieldValues,
  TInputDate,
  TDate = TInputDate
> = Omit<
  DatePickerProps<TInputDate, TDate>,
  'value' | 'onChange' | 'renderInput'
> & {
  name: Path<T>
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => string
  onChange?: (value: TDate | null, keyboardInputValue?: string) => void
  validation?: ControllerProps['rules']
  parseDate?: (value: TDate | null, keyboardInputValue?: string) => TDate
  control?: Control<T>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  textReadOnly?: boolean
}

export default function DatePickerElement<
  TFieldValues extends FieldValues,
  TInputDate,
  TDate = TInputDate
>({
  parseError,
  name,
  required,
  parseDate,
  validation = {},
  inputProps,
  control,
  textReadOnly,
  ...rest
}: DatePickerElementProps<TFieldValues, TInputDate, TDate>): JSX.Element {
  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({
        field: {onChange, value, onBlur, ref},
        fieldState: {error, invalid},
      }) => (
        <DatePicker
          {...mergeProps(rest, {
            value: value,
            onClose: onBlur,
            onChange: (value, keyboardInputValue) => {
              const newValue =
                typeof parseDate === 'function'
                  ? parseDate(value, keyboardInputValue)
                  : value

              onChange(newValue, keyboardInputValue)
            },
            ref: (r) => {
              ref(r?.querySelector('input'))
            },
          })}
          renderInput={(params) => (
            <TextField
              {...mergeProps(
                params,
                {
                  onBlur: onBlur,
                  inputProps: {
                    ...(textReadOnly && {
                      readOnly: true,
                    }),
                  },

                  required: !!required,
                  error: invalid,
                  helperText: error
                    ? typeof parseError === 'function'
                      ? parseError(error)
                      : error.message
                    : inputProps?.helperText || rest.helperText,
                },
                {inputProps}
              )}
            />
          )}
        />
      )}
    />
  )
}
