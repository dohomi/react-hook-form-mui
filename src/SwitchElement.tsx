import { Control, Controller } from 'react-hook-form'
import { FormControlLabel, FormControlLabelProps, Switch } from '@mui/material'

type IProps = Omit<FormControlLabelProps, 'control'>;

export type SwitchElementProps = IProps & {
  name: string;
  control?: Control<any>
}

export default function SwitchElement({ name, control, ...other }: SwitchElementProps) {
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Switch {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  )
}
