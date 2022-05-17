import PasswordElement, { PasswordElementProps } from './PasswordElement'
import { useWatch } from 'react-hook-form'

export type PasswordRepeatElementProps = PasswordElementProps & {
  passwordFieldName: string
}
export default function PasswordRepeatElement(props: PasswordRepeatElementProps) {
  const pwValue = useWatch({
    name: props.passwordFieldName,
    control: props.control,
    defaultValue: ''
  })
  return (
    <PasswordElement {...props}
                     validation={{
                       validate: (value: string) => {
                         return value === pwValue || 'Password should match'
                       }
                     }}
    />
  )
}
