import {TextField, useForkRef, TextFieldProps} from '@mui/material'
import {
  Control,
  FieldError,
  FieldPath,
  UseControllerProps,
  FieldValues,
  useController,
} from 'react-hook-form'
import {useFormError} from './FormErrorProvider'
import {forwardRef, ReactNode, RefAttributes, Ref} from 'react'

export type TextFieldElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<TextFieldProps, 'name'> & {
  validation: UseControllerProps<TFieldValues, TName>['rules']
  name: TName
  parseError?: (error: FieldError) => ReactNode
  control?: Control<TFieldValues>
  /**
   * You override the MUI's TextField component by passing a reference of the component you want to use.
   *
   * This is especially useful when you want to use a customized version of TextField.
   */
  component?: typeof TextField
}

type TextFieldElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: TextFieldElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const TextFieldElement = forwardRef(function TextFieldElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: TextFieldElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
    validation = {},
    parseError,
    type,
    required,
    name,
    control,
    component: TextFieldComponent = TextField,
    inputRef,
    ...rest
  } = props

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn

  const rules = {
    ...validation,
    ...(required &&
      !validation.required && {required: 'This field is required'}),
    ...(type === 'email' &&
      !validation.pattern && {
        pattern: {
          value:
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Please enter a valid email address',
        },
      }),
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
    <TextFieldComponent
      {...rest}
      name={field.name}
      value={field.value ?? ''}
      onChange={(ev) => {
        field.onChange(
          type === 'number' && ev.target.value
            ? +ev.target.value
            : ev.target.value
        )
        if (typeof rest.onChange === 'function') {
          rest.onChange(ev)
        }
      }}
      onBlur={field.onBlur}
      required={required}
      type={type}
      error={!!error}
      helperText={
        error
          ? typeof customErrorFn === 'function'
            ? customErrorFn(error)
            : error.message
          : rest.helperText
      }
      ref={ref}
      inputRef={handleInputRef}
    />
  )
}) as TextFieldElementComponent

export default TextFieldElement
