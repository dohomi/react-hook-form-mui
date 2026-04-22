import {
  forwardRef,
  type FocusEvent,
  ReactNode,
  Ref,
  RefAttributes,
  type ReactElement,
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
import {useForkRef} from '@mui/material'
import type {PickersTextFieldProps} from '@mui/x-date-pickers/PickersTextField'
import {useFormError} from './FormErrorProvider'
import {
  DatePicker,
  DatePickerProps,
  DatePickerSlotProps,
  DateValidationError,
  extractValidationProps,
  PickerChangeHandlerContext,
  validateDate,
} from '@mui/x-date-pickers'
import type {ValidateDateProps} from '@mui/x-date-pickers/validation'
import {usePickerAdapter} from '@mui/x-date-pickers/hooks'
import {PickerValidDate} from '@mui/x-date-pickers/models'
import {defaultErrorMessages} from './messages/DatePicker'
import {useTransform} from './useTransform'
import {getTimezone, readValueAsDate} from './utils'

export type DatePickerElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
> = Omit<DatePickerProps, 'value' | 'slotProps'> & {
  name: TName
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError | DateValidationError) => ReactNode
  rules?: UseControllerProps<TFieldValues, TName>['rules']
  control?: Control<TFieldValues>
  /** Props forwarded to the pickers text field slot (MUI X v9 / PickersTextField API). */
  inputProps?: Partial<PickersTextFieldProps>
  helperText?: PickersTextFieldProps['helperText']
  textReadOnly?: boolean
  slotProps?: Omit<DatePickerSlotProps, 'textField'>
  overwriteErrorMessages?: typeof defaultErrorMessages
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue | null
    output?: (
      value: TValue | null,
      context: PickerChangeHandlerContext<DateValidationError>
    ) => PathValue<TFieldValues, TName>
  }
}

type DatePickerElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
>(
  props: DatePickerElementProps<TFieldValues, TName, TValue> &
    RefAttributes<HTMLDivElement>
) => ReactElement

const DatePickerElement = forwardRef(function DatePickerElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
>(
  props: DatePickerElementProps<TFieldValues, TName, TValue>,
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
        const internalError = validateDate({
          props: {
            disableFuture: false,
            disablePast: false,
            ...validationProps,
          } as ValidateDateProps,
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
    control,
    rules: rulesTmp,
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
          : (newValue) => newValue,
    },
  })

  const handleInputRef = useForkRef(field.ref, inputRef)

  const errorMessage = error
    ? typeof customErrorFn === 'function'
      ? customErrorFn(error)
      : error.message
    : null

  const htmlInputFromUser = inputProps?.slotProps?.htmlInput
  const priorHtmlInputRef =
    htmlInputFromUser &&
    typeof htmlInputFromUser === 'object' &&
    'ref' in htmlInputFromUser
      ? (htmlInputFromUser as {ref?: React.Ref<HTMLInputElement | null>}).ref
      : undefined

  const mergedHtmlInputRef = useForkRef(handleInputRef, priorHtmlInputRef)

  return (
    <DatePicker
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
        textField: {
          ...inputProps,
          required,
          onBlur: (event: FocusEvent<HTMLDivElement>) => {
            field.onBlur()
            if (typeof inputProps?.onBlur === 'function') {
              inputProps.onBlur(event)
            }
          },
          error: !!errorMessage,
          helperText: errorMessage
            ? errorMessage
            : inputProps?.helperText ?? rest.helperText,
          slotProps: {
            ...inputProps?.slotProps,
            htmlInput: {
              ...(typeof htmlInputFromUser === 'object' &&
              htmlInputFromUser !== null
                ? htmlInputFromUser
                : {}),
              readOnly: !!textReadOnly,
              ref: mergedHtmlInputRef,
            },
          },
        },
      }}
    />
  )
})
DatePickerElement.displayName = 'DatePickerElement'
export default DatePickerElement as DatePickerElementComponent
