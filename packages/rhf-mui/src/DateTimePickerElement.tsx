import {
  DateTimePicker,
  DateTimePickerProps,
  DateTimePickerSlotsComponentsProps,
} from '@mui/x-date-pickers/DateTimePicker'
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
import {ReactNode} from 'react'
import {defaultErrorMessages} from './messages/DateTimePicker'
import {
  useLocalizationContext,
  validateDateTime,
} from '@mui/x-date-pickers/internals'

export type DateTimePickerElementProps<
  T extends FieldValues,
  TInputDate,
  TDate = TInputDate
> = Omit<DateTimePickerProps<TDate>, 'value' | 'slotProps'> & {
  name: Path<T>
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => ReactNode
  validation?: ControllerProps<T>['rules']
  control?: Control<T>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  textReadOnly?: boolean
  slotProps?: Omit<DateTimePickerSlotsComponentsProps<TDate>, 'textField'>
  overwriteErrorMessages?: typeof defaultErrorMessages
}

export default function DateTimePickerElement<
  TFieldValues extends FieldValues
>({
  parseError,
  name,
  required,
  validation = {},
  inputProps,
  control,
  textReadOnly,
  slotProps,
  overwriteErrorMessages,
  ...rest
}: DateTimePickerElementProps<TFieldValues, any, any>): JSX.Element {
  const errorMessages = {
    ...defaultErrorMessages,
    ...overwriteErrorMessages,
  }
  const errorMsgFn = useFormError()
  const adapter = useLocalizationContext()

  const customErrorFn = parseError || errorMsgFn
  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  validation.validate = {
    internal: (value) => {
      const inputTimezone =
        value == null || !adapter.utils.isValid(value)
          ? null
          : adapter.utils.getTimezone(value)

      const internalError = validateDateTime({
        props: {
          shouldDisableDate: rest.shouldDisableDate,
          shouldDisableMonth: rest.shouldDisableMonth,
          shouldDisableYear: rest.shouldDisableYear,
          disablePast: Boolean(rest.disablePast),
          disableFuture: Boolean(rest.disableFuture),
          minDate: rest.minDate,
          maxDate: rest.maxDate,
          timezone: rest.timezone ?? inputTimezone ?? 'default',
          disableIgnoringDatePartForTimeValidation:
            rest.disableIgnoringDatePartForTimeValidation,
          maxTime: rest.maxTime,
          minTime: rest.minTime,
          minutesStep: rest.minutesStep,
          shouldDisableTime: rest.shouldDisableTime,
        },
        value,
        adapter,
      })

      return internalError == null || errorMessages[internalError]
    },
    ...validation.validate,
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
        return (
          <DateTimePicker
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
                error: !!error,
                helperText: error
                  ? typeof customErrorFn === 'function'
                    ? customErrorFn(error)
                    : error.message
                  : inputProps?.helperText || rest.helperText,
                inputProps: {
                  readOnly: textReadOnly,
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
