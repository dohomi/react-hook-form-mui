import PasswordElement, {PasswordElementProps} from './PasswordElement'
import {Path, useWatch} from 'react-hook-form'
import {FieldValues} from 'react-hook-form/dist/types/fields'

export type PasswordRepeatElementProps<T extends FieldValues> =
  PasswordElementProps<T> & {
    passwordFieldName: Path<T>
    customInvalidFieldMessage?: string
  }
export default function PasswordRepeatElement<
  TFieldValues extends FieldValues
>({
  passwordFieldName,
  customInvalidFieldMessage,
  ...rest
}: PasswordRepeatElementProps<TFieldValues>) {
  const pwValue = useWatch({
    name: passwordFieldName,
    control: rest.control,
  })
  const invalidFieldMessage =
    customInvalidFieldMessage ?? 'Password should match'
  return (
    <PasswordElement
      {...rest}
      validation={{
        validate: (value: string) => {
          return value === pwValue || invalidFieldMessage
        },
      }}
    />
  )
}
