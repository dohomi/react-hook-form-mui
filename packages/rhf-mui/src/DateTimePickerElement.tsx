import {
  DateTimePicker,
  DateTimePickerProps,
  DateTimePickerSlotProps,
  DateTimeValidationError,
  PickerChangeHandlerContext,
  PickerValidDate,
  validateDateTime,
} from '@mui/x-date-pickers'
import {useLocalizationContext} from '@mui/x-date-pickers/internals'
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
import {
  forwardRef,
  type ReactElement,
  ReactNode,
  Ref,
  RefAttributes,
} from 'react'
import {defaultErrorMessages} from './messages/DateTimePicker'
import {useTransform} from './useTransform'
import {getTimezone, readValueAsDate} from './utils'

export type DateTimePickerElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
  TEnableAccessibleFieldDOMStructure extends boolean = false,
> = Omit<DateTimePickerProps, 'value' | 'slotProps'> & {
  name: TName
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => ReactNode
  rules?: UseControllerProps<TFieldValues, TName>['rules']
  control?: Control<TFieldValues>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  textReadOnly?: boolean
  slotProps?: Omit<
    DateTimePickerSlotProps<TEnableAccessibleFieldDOMStructure>,
    'textField'
  >
  overwriteErrorMessages?: typeof defaultErrorMessages
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue | null
    output?: (
      value: TValue | null,
      context: PickerChangeHandlerContext<DateTimeValidationError>
    ) => PathValue<TFieldValues, TName>
  }
}

type DateTimePickerElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
>(
  props: DateTimePickerElementProps<TFieldValues, TName, TValue> &
    RefAttributes<HTMLDivElement>
) => ReactElement

const DateTimePickerElement = forwardRef(function DateTimePickerElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
>(
  props: DateTimePickerElementProps<TFieldValues, TName, TValue>,
  ref: Ref<HTMLDivElement>
) {
  const {
    parseError,
    name,
    required,
    rules = {},
    inputProps,
    control,
    textReadOnly,
    slotProps,
    overwriteErrorMessages,
    inputRef,
    transform,
    ...rest
  } = props

  const adapter = useLocalizationContext()

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
  const errorMessages = {
    ...defaultErrorMessages,
    ...overwriteErrorMessages,
  }

  const rulesTmp = {
    ...rules,
    ...(required &&
      !rules.required && {
        required: 'This field is required',
      }),
    validate: {
      internal: (value: TValue | null) => {
        const date = readValueAsDate(adapter, value)
        if (!date) {
          return true
        }
        const internalError = validateDateTime({
          props: {
            shouldDisableDate: rest.shouldDisableDate,
            shouldDisableMonth: rest.shouldDisableMonth,
            shouldDisableYear: rest.shouldDisableYear,
            disablePast: Boolean(rest.disablePast),
            disableFuture: Boolean(rest.disableFuture),
            minDate: rest.minDate ?? adapter.defaultDates.minDate,
            maxDate: rest.maxDate ?? adapter.defaultDates.maxDate,
            disableIgnoringDatePartForTimeValidation:
              rest.disableIgnoringDatePartForTimeValidation,
            maxTime: rest.maxTime,
            minTime: rest.minTime,
            minutesStep: rest.minutesStep,
            shouldDisableTime: rest.shouldDisableTime,
          },
          timezone: rest.timezone ?? getTimezone(adapter, date) ?? 'default',
          value: date,
          adapter: adapter.adapter,
        })

        return internalError == null || errorMessages[internalError]
      },
      ...rules.validate,
    },
  }

  const {
    field,
    fieldState: {error},
  } = useController({
    name,
    rules: rulesTmp,
    control,
    disabled: rest.disabled,
    defaultValue: null as PathValue<TFieldValues, TName>,
  })

  const {value, onChange} = useTransform<TFieldValues, TName, TValue | null>({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input:
        typeof transform?.input === 'function'
          ? transform.input
          : (newValue) => readValueAsDate(adapter, newValue),
      output:
        typeof transform?.output === 'function'
          ? transform.output
          : (newValue: TValue | null) =>
              newValue as PathValue<TFieldValues, TName>,
    },
  })

  const handleInputRef = useForkRef(field.ref, inputRef)

  return (
    <DateTimePicker
      {...rest}
      {...field}
      value={value}
      ref={ref}
      inputRef={handleInputRef}
      onClose={(...args) => {
        field.onBlur()
        if (rest.onClose) {
          rest.onClose(...args)
        }
      }}
      onChange={(newValue, context) => {
        onChange(newValue, context)
        if (typeof rest.onChange === 'function') {
          rest.onChange(newValue, context)
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
