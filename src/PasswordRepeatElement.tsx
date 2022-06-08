import PasswordElement, { PasswordElementProps } from './PasswordElement'
import { useWatch } from 'react-hook-form'

export type PasswordRepeatElementProps = PasswordElementProps & {
  passwordFieldName: string
}
export default function PasswordRepeatElement(props: PasswordRepeatElementProps) {
  const { passwordFieldName, ...rest } = props
  const pwValue = useWatch({
    name: passwordFieldName,
    control: rest.control,
    defaultValue: ''
  })
  return (
    <PasswordElement {...rest}
                     validation={{
                       validate: (value: string) => {
                         return value === pwValue || 'Password should match'
                       }
                     }}
    />
  )
}
