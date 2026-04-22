import {
  forwardRef,
  MouseEvent,
  type ReactElement,
  ReactNode,
  Ref,
  RefAttributes,
  useState,
} from 'react'
import TextFieldElement, {TextFieldElementProps} from './TextFieldElement'
import {IconButton, IconButtonProps, InputAdornment} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {FieldPath, FieldValues} from 'react-hook-form'

export type PasswordElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
> = TextFieldElementProps<TFieldValues, TName, TValue> & {
  iconColor?: IconButtonProps['color']
  renderIcon?: (password: boolean) => ReactNode
}
type PasswordElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: PasswordElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => ReactElement
const PasswordElement = forwardRef(function PasswordEl<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
>(
  props: PasswordElementProps<TFieldValues, TName, TValue>,
  ref: Ref<HTMLDivElement>
) {
  const {
    iconColor,
    renderIcon = (password) => (password ? <Visibility /> : <VisibilityOff />),
    slotProps,
    ...rest
  } = props
  const [password, setPassword] = useState<boolean>(true)

  const endAdornment = (
    <InputAdornment position={'end'}>
      <IconButton
        aria-label={password ? 'Hide password' : 'Show password'}
        onMouseDown={(e: MouseEvent<HTMLButtonElement>) => e.preventDefault()}
        onClick={() => setPassword(!password)}
        tabIndex={-1}
        color={iconColor ?? 'default'}
      >
        {renderIcon(password)}
      </IconButton>
    </InputAdornment>
  )

  const inputSlot = slotProps?.input
  const inputSlotPlain =
    inputSlot && typeof inputSlot === 'object' && !('call' in inputSlot)
      ? (inputSlot as {endAdornment?: ReactNode})
      : undefined

  return (
    <TextFieldElement
      {...(rest as TextFieldElementProps)}
      ref={ref}
      type={password ? 'password' : 'text'}
      slotProps={{
        ...slotProps,
        input: {
          ...inputSlotPlain,
          endAdornment: (
            <>
              {endAdornment}
              {inputSlotPlain?.endAdornment}
            </>
          ),
        },
      }}
    />
  )
})
PasswordElement.displayName = 'PasswordElement'
export default PasswordElement as PasswordElementComponent
