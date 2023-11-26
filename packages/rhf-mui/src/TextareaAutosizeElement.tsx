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
  UseControllerProps,
  useController,
  FieldValues,
} from 'react-hook-form'
import {CSSProperties, ReactNode, RefAttributes, forwardRef, Ref} from 'react'
import {useFormError} from './FormErrorProvider'

export type TextareaAutosizeElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<TextFieldProps, 'name' | 'type'> & {
  validation?: UseControllerProps<TFieldValues, TName>['rules']
  name: TName
  parseError?: (error: FieldError) => ReactNode
  control?: Control<TFieldValues>
  resizeStyle?: CSSProperties['resize']
}

type TextareaAutosizeElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: TextareaAutosizeElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const TextareaAutosizeElement = forwardRef(function TextareaAutosizeElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: TextareaAutosizeElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    validation = {},
    parseError,
    required,
    name,
    control,
    rows,
    resizeStyle,
    inputRef,
    inputProps,
    ...rest
  } = props

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn

  const rules = {
    ...validation,
    ...(required &&
      !validation.required && {required: 'This field is required'}),
  }

  const {
    field,
    fieldState: {error},
  } = useController({
    name,
    control,
    rules,
  })

  const handleInputRef = useForkRef(field.ref, inputRef)

  return (
    <TextField
      {...rest}
      name={name}
      value={field.value ?? ''}
      onChange={(ev) => {
        field.onChange(ev.target.value)
        if (typeof rest.onChange === 'function') {
          rest.onChange(ev)
        }
      }}
      onBlur={field.onBlur}
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
      InputProps={{
        inputComponent: TextareaAutosize,
        inputProps: {
          minRows: rows,
          style: {
            resize: resizeStyle || 'both',
          },
          ...(inputProps || {}),
        },
      }}
      ref={ref}
    />
  )
}) as TextareaAutosizeElementComponent

export default TextareaAutosizeElement
