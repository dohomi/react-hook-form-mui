import PasswordElement, {PasswordElementProps} from './PasswordElement'
import {FieldPath, useWatch, FieldValues} from 'react-hook-form'
import {forwardRef, Ref, RefAttributes} from 'react'

export type PasswordRepeatElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TConfirmPasswordName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TPasswordName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = PasswordElementProps<TFieldValues, TConfirmPasswordName> & {
  passwordFieldName: TPasswordName
  customInvalidFieldMessage?: string
}

type PasswordRepeatElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TConfirmPasswordName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TPasswordName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: PasswordRepeatElementProps<
    TFieldValues,
    TConfirmPasswordName,
    TPasswordName
  > &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const PasswordRepeatElement = forwardRef(function PasswordRepeatElement<
  TFieldValues extends FieldValues = FieldValues,
  TConfirmPasswordName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TPasswordName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: PasswordRepeatElementProps<
    TFieldValues,
    TConfirmPasswordName,
    TPasswordName
  >,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {passwordFieldName, customInvalidFieldMessage, control, ...rest} = props

  const pwValue = useWatch({
    name: passwordFieldName,
    control,
  })
  const invalidFieldMessage =
    customInvalidFieldMessage ?? 'Password should match'
  return (
    <PasswordElement
      {...rest}
      ref={ref}
      validation={{
        validate: (value: string) => {
          return value === pwValue || invalidFieldMessage
        },
      }}
    />
  )
}) as PasswordRepeatElementComponent

export default PasswordRepeatElement
