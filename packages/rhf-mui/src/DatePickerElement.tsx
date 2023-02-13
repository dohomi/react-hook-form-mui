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
  'value' | 'onChange' | 'renderInput' | 'inputFormat'
> & {
  name: Path<T>
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => string
  onChange?: (value: TDate, keyboardInputValue?: string) => void
  validation?: ControllerProps['rules']
  control?: Control<T>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  textReadOnly?: boolean
}

export default function DatePickerElement<TFieldValues extends FieldValues>({
  parseError,
  name,
  required,
  validation = {},
  inputProps,
  control,
  textReadOnly,
  ...rest
}: DatePickerElementProps<TFieldValues, any, any>): JSX.Element {
  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      defaultValue={null as any}
      render={({field, fieldState: {error}}) => (
        <DatePicker
          {...rest}
          {...field}
          ref={(r) => {
            field.ref(r?.querySelector('input'))
          }}
          onClose={(...args) => {
            field.onBlur()
            if (rest.onClose) {
              rest.onClose(...args)
            }
          }}
          onChange={(v, keyboardInputValue) => {
            // console.log(v, keyboardInputValue)
            field.onChange(v, keyboardInputValue)
            if (typeof rest.onChange === 'function') {
              rest.onChange(v, keyboardInputValue)
            }
          }}
          renderInput={({error: inputError, ...params}) => (
            <TextField
              {...inputProps}
              helperText={
                error
                  ? typeof parseError === 'function'
                    ? parseError(error)
                    : error.message
                  : inputProps?.helperText || rest.helperText
              }
              {...params}
              error={!!error}
              inputProps={{
                ...params?.inputProps,
                ...(textReadOnly && {
                  readOnly: true,
                }),
              }}
            />
          )}
        />
      )}
    />
  )
}
