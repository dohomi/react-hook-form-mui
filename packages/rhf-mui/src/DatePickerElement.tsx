import {
  DatePicker,
  DatePickerProps,
  DatePickerSlotsComponentsProps,
} from '@mui/x-date-pickers/DatePicker'
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form'
import {TextFieldProps} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'
import {useFormError} from './FormErrorProvider'
import {ReactNode, useState} from 'react'
import {DateValidationError} from '@mui/x-date-pickers'
import {defaultErrorMessages} from './dateErrorHelper'

export type DatePickerElementProps<
  T extends FieldValues,
  TInputDate,
  TDate = TInputDate
> = Omit<DatePickerProps<TDate>, 'value' | 'slotProps'> & {
  name: Path<T>
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError | DateValidationError) => ReactNode
  validation?: ControllerProps<T>['rules']
  control?: Control<T>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  textReadOnly?: boolean
  slotProps?: Omit<DatePickerSlotsComponentsProps<TDate>, 'textField'>
  overwriteErrorMessages?: typeof defaultErrorMessages
}

export default function DatePickerElement<TFieldValues extends FieldValues>({
  parseError,
  name,
  required,
  validation = {},
  inputProps,
  control,
  textReadOnly,
  slotProps,
  overwriteErrorMessages = defaultErrorMessages,
  ...rest
}: DatePickerElementProps<TFieldValues, any, any>): JSX.Element {
  const errorMsgFn = useFormError()
  const [internalError, setInternalError] =
    useState<DateValidationError | null>(null)
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
      render={({field, fieldState: {error}}) => {
        if (field?.value && typeof field?.value === 'string') {
          field.value = new Date(field.value) as any // need to see if this works for all localization adaptors
        }

        const errorMessage = internalError
          ? overwriteErrorMessages[internalError]
          : error
          ? typeof customErrorFn === 'function'
            ? customErrorFn(error)
            : error.message
          : null
        return (
          <DatePicker
            {...rest}
            {...field}
            onError={(iError) => setInternalError(iError)}
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
            slotProps={{
              ...slotProps,
              textField: {
                ...inputProps,
                required,
                error: !!errorMessage,
                helperText: errorMessage
                  ? errorMessage
                  : inputProps?.helperText || rest.helperText,
                inputProps: {
                  readOnly: !!textReadOnly,
                  ...inputProps?.inputProps,
                },
              },
            }}
          />
        )
      }}
    />
  )
}
