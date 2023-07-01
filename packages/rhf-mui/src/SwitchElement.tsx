import {Control, Controller, Path} from 'react-hook-form'
import {FormControlLabel, FormControlLabelProps, Switch} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'

type IProps = Omit<FormControlLabelProps, 'control'>

export type SwitchElementProps<T extends FieldValues> = IProps & {
  name: Path<T>
  control?: Control<T>
  /**
   * Function to transform the value from the form controller to a boolean that can be used by the MUI Switch component.
   *
   * You probably want to use this prop together with `transformValue`.
   */
  parseValue?: (formDataValue: unknown) => boolean
  /**
   * Function to transform the input value before sending it to the Form Controller.
   *
   * You probably want to use this prop together with `parseValue`.
   */
  transformValue?: (checked: boolean) => unknown
}

const defaultTransform = (value: any): any => value

export default function SwitchElement<TFieldValues extends FieldValues>({
  name,
  control,
  parseValue = defaultTransform,
  transformValue = defaultTransform,
  ...other
}: SwitchElementProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({field: {onChange, ...field}}) => (
        <FormControlLabel
          control={
            <Switch
              {...field}
              checked={!!parseValue(field.value)}
              onChange={(ev) => {
                onChange(transformValue(ev.target.checked))
              }}
            />
          }
          {...other}
        />
      )}
    />
  )
}
