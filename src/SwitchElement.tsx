import { Control, Controller, Path } from 'react-hook-form'
import { FormControlLabel, FormControlLabelProps, Switch } from '@mui/material'
import { FieldValues } from 'react-hook-form/dist/types/fields'

type IProps = Omit<FormControlLabelProps, 'control'>;

export type SwitchElementProps<T> = IProps & {
  name: Path<T>;
  control?: Control<T>
}

export default function SwitchElement<TFieldValues extends FieldValues>({
  name,
  control,
  ...other
}: SwitchElementProps<TFieldValues>) {
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Switch {...field} checked={!!field.value} />}
        />
      }
      {...other}
    />
  )
}
