import {Control, Controller, Path, useFormContext} from 'react-hook-form'
import {FormControlLabel, FormControlLabelProps, Switch} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'

type IProps = Omit<FormControlLabelProps, 'control'>;

export type SwitchElementProps<T extends FieldValues> = IProps & {
    name: Path<T>;
    control?: Control<T>
}

export default function SwitchElement<TFieldValues extends FieldValues>({
                                                                            name,
                                                                            control,
                                                                            ...other
                                                                        }: SwitchElementProps<TFieldValues>) {
    const { register } = useFormContext()
    return (
        <FormControlLabel
            control={
                <Controller
                    name={name}
                    control={control}
                    render={({field}) => <Switch {...field} ref={register(name).ref} checked={!!field.value}/>}
                />
            }
            {...other}
        />
    )
}
