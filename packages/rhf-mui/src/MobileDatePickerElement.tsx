import {
  MobileDatePicker,
  MobileDatePickerProps,
  MobileDatePickerSlotsComponentsProps,
} from '@mui/x-date-pickers/MobileDatePicker'
import {
  Control,
  FieldError,
  FieldValues,
  FieldPath,
  PathValue,
  UseControllerProps,
  useController,
} from 'react-hook-form'
import {TextFieldProps, useForkRef} from '@mui/material'
import {useFormError} from './FormErrorProvider'
import {ReactNode, forwardRef, RefAttributes, Ref} from 'react'
import {defaultErrorMessages} from './messages/DatePicker'
import {
  useLocalizationContext,
  validateDate,
} from '@mui/x-date-pickers/internals'

export type MobileDatePickerElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TDate = PathValue<TFieldValues, TName>
> = Omit<MobileDatePickerProps<TDate>, 'value' | 'slotProps'> & {
  name: TName
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => ReactNode
  validation?: UseControllerProps<TFieldValues, TName>['rules']
  control?: Control<TFieldValues>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  slotProps?: Omit<MobileDatePickerSlotsComponentsProps<TDate>, 'textField'>
  overwriteErrorMessages?: typeof defaultErrorMessages
}

type MobileDatePickerElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: MobileDatePickerElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const MobileDatePickerElement = forwardRef(function MobileDatePickerElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: MobileDatePickerElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    parseError,
    name,
    required,
    validation = {},
    inputProps,
    control,
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

        const internalError = validateDate({
          props: {
            shouldDisableDate: rest.shouldDisableDate,
            shouldDisableMonth: rest.shouldDisableMonth,
            shouldDisableYear: rest.shouldDisableYear,
            disablePast: Boolean(rest.disablePast),
            disableFuture: Boolean(rest.disableFuture),
            minDate: rest.minDate,
            maxDate: rest.maxDate,
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
    <MobileDatePicker
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
        },
      }}
    />
  )
}) as MobileDatePickerElementComponent

export default MobileDatePickerElement
