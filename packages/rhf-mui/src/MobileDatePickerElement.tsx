import {
  DateValidationError,
  MobileDatePicker,
  MobileDatePickerProps,
  MobileDatePickerSlotProps,
  PickerChangeHandlerContext,
  validateDate,
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
import {defaultErrorMessages} from './messages/DatePicker'
import {useLocalizationContext} from '@mui/x-date-pickers/internals'
import {useTransform} from './useTransform'
import {getTimezone, readValueAsDate} from './utils'
import {PickerValidDate} from '@mui/x-date-pickers/models'

export type MobileDatePickerElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
  TEnableAccessibleFieldDOMStructure extends boolean = false,
> = Omit<MobileDatePickerProps<TValue>, 'value' | 'slotProps'> & {
  name: TName
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => ReactNode
  rules?: UseControllerProps<TFieldValues, TName>['rules']
  control?: Control<TFieldValues>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  slotProps?: Omit<
    MobileDatePickerSlotProps<TValue, TEnableAccessibleFieldDOMStructure>,
    'textField'
  >
  overwriteErrorMessages?: typeof defaultErrorMessages
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue | null
    output?: (
      value: TValue | null,
      context: PickerChangeHandlerContext<DateValidationError>
    ) => PathValue<TFieldValues, TName>
  }
}

type MobileDatePickerElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
>(
  props: MobileDatePickerElementProps<TFieldValues, TName, TValue> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const MobileDatePickerElement = forwardRef(function MobileDatePickerElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue extends PickerValidDate = PickerValidDate,
>(
  props: MobileDatePickerElementProps<TFieldValues, TName, TValue>,
  ref: Ref<HTMLDivElement>
) {
  const {
    parseError,
    name,
    required,
    rules = {},
    inputProps,
    control,
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
        const internalError = validateDate({
          props: {
            shouldDisableDate: rest.shouldDisableDate,
            shouldDisableMonth: rest.shouldDisableMonth,
            shouldDisableYear: rest.shouldDisableYear,
            disablePast: Boolean(rest.disablePast),
            disableFuture: Boolean(rest.disableFuture),
            minDate: rest.minDate,
            maxDate: rest.maxDate,
          },
          timezone: rest.timezone ?? getTimezone(adapter, date) ?? 'default',
          value: date,
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
    <MobileDatePicker
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
        },
      }}
    />
  )
})
MobileDatePickerElement.displayName = 'MobileDatePickerElement'
export default MobileDatePickerElement as MobileDatePickerElementComponent
