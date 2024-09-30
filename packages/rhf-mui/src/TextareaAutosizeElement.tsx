import {
  TextareaAutosize,
  TextField,
  TextFieldProps,
  useForkRef,
} from '@mui/material'
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
  ChangeEvent,
  CSSProperties,
  forwardRef,
  ReactNode,
  Ref,
  RefAttributes,
} from 'react'
import {useFormError} from './FormErrorProvider'
import {useTransform} from './useTransform'

export type TextareaAutosizeElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
> = Omit<TextFieldProps, 'name' | 'type'> & {
  rules?: UseControllerProps<TFieldValues, TName>['rules']
  name: TName
  parseError?: (error: FieldError) => ReactNode
  control?: Control<TFieldValues>
  resizeStyle?: CSSProperties['resize']
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue
    output?: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => PathValue<TFieldValues, TName>
  }
}

type TextareaAutosizeElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
>(
  props: TextareaAutosizeElementProps<TFieldValues, TName, TValue> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const TextareaAutosizeElement = forwardRef(function TextareaAutosizeElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
>(
  props: TextareaAutosizeElementProps<TFieldValues, TName, TValue>,
  ref: Ref<HTMLDivElement>
) {
  const {
    rules = {},
    parseError,
    required,
    name,
    control,
    rows,
    resizeStyle = 'none',
    maxRows,
    minRows,
    inputRef,
    inputProps,
    transform,
    onBlur,
    ...rest
  } = props

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn

  const rulesTmp = {
    ...rules,
    ...(required && !rules.required && {required: 'This field is required'}),
  }

  const {
    field,
    fieldState: {error},
  } = useController({
    name,
    control,
    rules: rulesTmp,
    disabled: rest.disabled,
  })

  const {value, onChange} = useTransform<TFieldValues, TName, TValue>({
    value: field.value,
    onChange: field.onChange,
    transform: {
      input:
        typeof transform?.input === 'function'
          ? transform.input
          : (value) => {
              return value ?? ('' as TValue)
            },
      output:
        typeof transform?.output === 'function'
          ? transform.output
          : (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              return event.target.value as PathValue<TFieldValues, TName>
            },
    },
  })

  const handleInputRef = useForkRef(field.ref, inputRef)

  return (
    <TextField
      {...rest}
      name={name}
      value={value}
      onChange={(event) => {
        onChange(event)
        if (typeof rest.onChange === 'function') {
          rest.onChange(event)
        }
      }}
      onBlur={(event) => {
        field.onBlur()
        if (typeof onBlur === 'function') {
          onBlur(event)
        }
      }}
      required={required}
      error={!!error}
      helperText={
        error
          ? typeof customErrorFn === 'function'
            ? customErrorFn(error)
            : error.message
          : rest.helperText
      }
      inputRef={handleInputRef}
      multiline
      ref={ref}
      slotProps={{
        input: {
          inputComponent: TextareaAutosize,
          inputProps: {
            minRows: minRows || rows,
            maxRows: maxRows || rows,
            style: {
              resize: resizeStyle,
            },
            ...(inputProps || {}),
          },
        },
      }}
    />
  )
})
TextareaAutosizeElement.displayName = 'TextareaAutosizeElement'
export default TextareaAutosizeElement as TextareaAutosizeElementComponent
