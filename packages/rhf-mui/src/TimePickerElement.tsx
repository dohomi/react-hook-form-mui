import {
  TimePicker,
  TimePickerProps,
  TimePickerSlotsComponentsProps,
} from '@mui/x-date-pickers/TimePicker'
import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  PathValue,
  useController,
  UseControllerProps,
} from 'react-hook-form'
import {TextFieldProps, useForkRef} from '@mui/material'
import {useFormError} from './FormErrorProvider'
import {forwardRef, ReactNode, Ref, RefAttributes} from 'react'
import {
  useLocalizationContext,
  validateTime,
} from '@mui/x-date-pickers/internals'
import {defaultErrorMessages} from './messages/TimePicker'

export type TimePickerElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TDate = PathValue<TFieldValues, TName>
> = Omit<TimePickerProps<TDate>, 'value' | 'renderInput'> & {
  name: TName
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => ReactNode
  validation?: UseControllerProps<TFieldValues, TName>['rules']
  control?: Control<TFieldValues>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  textReadOnly?: boolean
  slotProps?: Omit<TimePickerSlotsComponentsProps<TDate>, 'textField'>
  overwriteErrorMessages?: typeof defaultErrorMessages
}

type TimePickerElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: TimePickerElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const TimePickerElement = forwardRef(function TimePickerElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: TimePickerElementProps<TFieldValues, TName>,
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

        const internalError = validateTime({
          props: {
            minTime: rest.minTime,
            maxTime: rest.maxTime,
            minutesStep: rest.minutesStep,
            shouldDisableClock: rest.shouldDisableClock,
            shouldDisableTime: rest.shouldDisableTime,
            disableIgnoringDatePartForTimeValidation:
              rest.disableIgnoringDatePartForTimeValidation,
            disablePast: Boolean(rest.disablePast),
            disableFuture: Boolean(rest.disableFuture),
            timezone: rest.timezone ?? inputTimezone ?? 'default',
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
    control,
    rules,
    defaultValue: null as any,
  })

  const handleInputRef = useForkRef(field.ref, inputRef)

  if (field?.value && typeof field?.value === 'string') {
    field.value = new Date(field.value) as any // need to see if this works for all localization adaptors
  }

  return (
    <TimePicker
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
TimePickerElement.displayName = 'TimePickerElement'

export default TimePickerElement as TimePickerElementComponent
