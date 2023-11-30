import {
  DateTimePicker,
  DateTimePickerProps,
  DateTimePickerSlotsComponentsProps,
} from '@mui/x-date-pickers/DateTimePicker'
import {
  Control,
  FieldError,
  FieldPath,
  PathValue,
  useController,
  UseControllerProps,
} from 'react-hook-form'
import {TextFieldProps, useForkRef} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'
import {useFormError} from './FormErrorProvider'
import {forwardRef, ReactNode, Ref, RefAttributes} from 'react'
import {defaultErrorMessages} from './messages/DateTimePicker'
import {
  useLocalizationContext,
  validateDateTime,
} from '@mui/x-date-pickers/internals'

export type DateTimePickerElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TDate = PathValue<TFieldValues, TName>
> = Omit<DateTimePickerProps<TDate>, 'value' | 'slotProps'> & {
  name: TName
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => ReactNode
  validation?: UseControllerProps<TFieldValues, TName>['rules']
  control?: Control<TFieldValues>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  textReadOnly?: boolean
  slotProps?: Omit<DateTimePickerSlotsComponentsProps<TDate>, 'textField'>
  overwriteErrorMessages?: typeof defaultErrorMessages
}

type DateTimePickerElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: DateTimePickerElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const DateTimePickerElement = forwardRef(function DateTimePickerElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: DateTimePickerElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    parseError,
    name,
    required,
    validation = {},
    inputProps,
    control,
    textReadOnly,
    slotProps,
    overwriteErrorMessages,
    inputRef,
    ...rest
  } = props

  const adapter = useLocalizationContext()

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
  const errorMessages = {
    ...defaultErrorMessages,
    ...overwriteErrorMessages,
  }

  const rules = {
    ...validation,
    ...(required &&
      !validation.required && {
        required: 'This field is required',
      }),
    validate: {
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
    },
  }

  const {
    field,
    fieldState: {error},
  } = useController({
    name,
    rules,
    control,
    defaultValue: null as any,
  })

  const handleInputRef = useForkRef(field.ref, inputRef)

  if (field?.value && typeof field?.value === 'string') {
    field.value = new Date(field.value) as any // need to see if this works for all localization adaptors
  }
  return (
    <DateTimePicker
      {...rest}
      {...field}
      ref={ref}
      inputRef={handleInputRef}
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
})
DateTimePickerElement.displayName = 'DateTimePickerElement'
export default DateTimePickerElement as DateTimePickerElementComponent
