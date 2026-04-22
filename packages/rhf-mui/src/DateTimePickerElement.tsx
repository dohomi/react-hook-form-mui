import {
  forwardRef,
  type FocusEvent,
  type ReactElement,
  ReactNode,
  Ref,
  RefAttributes,
} from 'react'
import {
  Control,
  FieldError,
  FieldPath,
  FieldValues,
  PathValue,
  useController,
  UseControllerProps,
} from 'react-hook-form'
import {
  DateTimePicker,
  DateTimePickerProps,
  DateTimePickerSlotProps,
  DateTimeValidationError,
  extractValidationProps,
  PickerChangeHandlerContext,
  PickerValidDate,
  validateDateTime,
} from '@mui/x-date-pickers'
import type {ValidateDateTimeProps} from '@mui/x-date-pickers/validation'
import {usePickerAdapter} from '@mui/x-date-pickers/hooks'
import {useForkRef} from '@mui/material'
import type {PickersTextFieldProps} from '@mui/x-date-pickers/PickersTextField'
import {useFormError} from './FormErrorProvider'
import {defaultErrorMessages} from './messages/DateTimePicker'
import {useTransform} from './useTransform'
import {getTimezone, readValueAsDate} from './utils'

export type DateTimePickerElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
> = Omit<DateTimePickerProps, 'value' | 'slotProps'> & {
  name: TName
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => ReactNode
  rules?: UseControllerProps<TFieldValues, TName>['rules']
  control?: Control<TFieldValues>
  inputProps?: Partial<PickersTextFieldProps>
  helperText?: PickersTextFieldProps['helperText']
  textReadOnly?: boolean
  slotProps?: Omit<DateTimePickerSlotProps, 'textField'>
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

  const adapter = usePickerAdapter()
  const validationProps = extractValidationProps(rest)
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
            disableFuture: false,
            disablePast: false,
            ...validationProps,
          } as ValidateDateTimeProps,
          timezone: rest.timezone ?? getTimezone(adapter, date) ?? 'default',
          value: date,
          adapter: adapter,
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

  const htmlInputFromUser = inputProps?.slotProps?.htmlInput
  const priorHtmlInputRef =
    htmlInputFromUser &&
    typeof htmlInputFromUser === 'object' &&
    'ref' in htmlInputFromUser
      ? (htmlInputFromUser as {ref?: React.Ref<HTMLInputElement | null>}).ref
      : undefined

  const mergedHtmlInputRef = useForkRef(handleInputRef, priorHtmlInputRef)

  const textFieldSlot: Partial<PickersTextFieldProps> = {
    ...inputProps,
    required,
    error: !!error,
    helperText: error
      ? typeof customErrorFn === 'function'
        ? customErrorFn(error)
        : error.message
      : inputProps?.helperText ?? rest.helperText,
    onBlur: (event: FocusEvent<HTMLDivElement>) => {
      field.onBlur()
      inputProps?.onBlur?.(event)
    },
    slotProps: {
      ...inputProps?.slotProps,
      htmlInput: {
        ...(typeof htmlInputFromUser === 'object' && htmlInputFromUser !== null
          ? htmlInputFromUser
          : {}),
        readOnly: textReadOnly,
        ref: mergedHtmlInputRef,
      },
    },
  }

  return (
    <DateTimePicker
      {...rest}
      {...field}
      value={value}
      ref={ref}
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
        textField: textFieldSlot,
      }}
    />
  )
})
DateTimePickerElement.displayName = 'DateTimePickerElement'
export default DateTimePickerElement as DateTimePickerElementComponent
