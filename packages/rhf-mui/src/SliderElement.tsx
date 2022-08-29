import {Control, Controller, Path} from 'react-hook-form'
import {FormLabel, Slider, SliderProps} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'

export type SliderElementProps<T extends FieldValues> = Omit<SliderProps, 'control'> & {
    name: Path<T>
    control?: Control<T>
    label?: string
}

export default function SliderElement<TFieldValues extends FieldValues>({
                                                                            name,
                                                                            control,
                                                                            label,
                                                                            ...other
                                                                        }: SliderElementProps<TFieldValues>) {
    return (
        <>
            {label && <FormLabel component="legend">{label}</FormLabel>}
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, value}}) => (
                    <Slider
                        {...other}
                        value={value}
                        onChange={onChange}
                        valueLabelDisplay={other.valueLabelDisplay || 'auto'}
                    />
                )}
            />
        </>
    )
}
