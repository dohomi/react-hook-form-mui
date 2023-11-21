import {Control, FieldValues, FieldPath, useController} from 'react-hook-form'
import {
  FormControlLabel,
  FormControlLabelProps,
  Switch,
  SwitchProps,
  useForkRef,
} from '@mui/material'
import {forwardRef, RefAttributes, Ref} from 'react'

export type SwitchElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<FormControlLabelProps, 'control'> & {
  name: TName
  control?: Control<TFieldValues>
  switchProps?: SwitchProps
}

type SwitchElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: SwitchElementProps<TFieldValues, TName> &
    RefAttributes<HTMLLabelElement>
) => JSX.Element

const SwitchElement = forwardRef(function SwitchElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: SwitchElementProps<TFieldValues, TName>,
  ref: Ref<HTMLLabelElement>
): JSX.Element {
  const {name, control, switchProps, ...rest} = props

  const {field} = useController({
    name,
    control,
  })

  const handleSwitchRef = useForkRef(field.ref, switchProps?.ref)

  return (
    <FormControlLabel
      ref={ref}
      control={
        <Switch
          {...switchProps}
          name={field.name}
          value={field.value}
          onChange={(event, checked) => {
            field.onChange(event, checked)
            if (typeof switchProps?.onChange === 'function') {
              switchProps.onChange(event, checked)
            }
          }}
          onBlur={(event) => {
            field.onBlur()
            if (typeof switchProps?.onBlur === 'function') {
              switchProps?.onBlur(event)
            }
          }}
          ref={handleSwitchRef}
          checked={!!field.value}
        />
      }
      {...rest}
    />
  )
}) as SwitchElementComponent

export default SwitchElement
