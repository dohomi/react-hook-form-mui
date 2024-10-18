import {
  PickerChangeHandlerContext,
  TimePicker,
  TimePickerProps,
  TimePickerSlotProps,
  TimeValidationError,
  validateTime,
} from '@mui/x-date-pickers'
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
import {useLocalizationContext} from '@mui/x-date-pickers/internals'
import {defaultErrorMessages} from './messages/TimePicker'
import {useTransform} from './useTransform'
import {getTimezone, readValueAsDate} from './utils'
import {PickerValidDate} from '@mui/x-date-pickers/models'

export type TimePickerElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
  TEnableAccessibleFieldDOMStructure extends boolean = false,
> = Omit<TimePickerProps<TValue>, 'value' | 'renderInput'> & {
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
    TimePickerSlotProps<TValue, TEnableAccessibleFieldDOMStructure>,
    'textField'
  >
  overwriteErrorMessages?: typeof defaultErrorMessages
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue | null
    output?: (
      value: TValue | null,
      context: PickerChangeHandlerContext<TimeValidationError>
    ) => PathValue<TFieldValues, TName>
  }
}

type TimePickerElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
>(
  props: TimePickerElementProps<TFieldValues, TName, TValue> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const TimePickerElement = forwardRef(function TimePickerElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
>(
  props: TimePickerElementProps<TFieldValues, TName, TValue>,
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
        const internalError = validateTime({
          props: {
            minTime: rest.minTime,
            maxTime: rest.maxTime,
            minutesStep: rest.minutesStep,
            shouldDisableTime: rest.shouldDisableTime,
            disableIgnoringDatePartForTimeValidation:
              rest.disableIgnoringDatePartForTimeValidation,
            disablePast: Boolean(rest.disablePast),
            disableFuture: Boolean(rest.disableFuture),
          },

          timezone: rest.timezone ?? getTimezone(adapter, date) ?? 'default',
          value,
          adapter,
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

  return (
    <TimePicker
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
      onChange={(value, context) => {
        onChange(value, context)
        if (typeof rest.onChange === 'function') {
          rest.onChange(value, context)
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
