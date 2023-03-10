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
import {useFormError} from './FormErrorProvider'

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
  control?: Control<T>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  textReadOnly?: boolean
}

export default function TimePickerElement<TFieldValues extends FieldValues>({
  parseError,
  name,
  required,
  validation = {},
  inputProps,
  control,
  textReadOnly,
  ...rest
}: TimePickerElementProps<TFieldValues, string | null>): JSX.Element {
  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
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
        <TimePicker
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
                  ? typeof customErrorFn === 'function'
                    ? customErrorFn(error)
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
