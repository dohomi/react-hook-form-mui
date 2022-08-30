import {Control, Controller, ControllerProps, FieldError, Path} from "react-hook-form";
import {FieldValues} from "react-hook-form/dist/types/fields";
import {
    FormControl,
    FormHelperText,
    FormLabel,
    FormLabelProps,
    ToggleButton,
    ToggleButtonGroup,
    ToggleButtonGroupProps,
    ToggleButtonProps
} from "@mui/material";
import {ReactNode} from "react";

type SingleToggleButtonProps =
    Omit<ToggleButtonProps, 'value' | 'children'>
    & {
    id: number | string
    label: ReactNode
}

export type ToggleButtonGroupElementProps<T extends FieldValues> = ToggleButtonGroupProps & {
    required?: boolean
    label?: string
    validation?: ControllerProps['rules']
    name: Path<T>
    parseError?: (error: FieldError) => string
    control?: Control<T>
    options: SingleToggleButtonProps[]
    formLabelProps?: FormLabelProps
    helperText?: string
}

export default function ToggleButtonGroupElement<TFieldValues extends FieldValues = FieldValues>({
                                                                                                     name,
                                                                                                     control,
                                                                                                     label,
                                                                                                     validation = {},
                                                                                                     required,
                                                                                                     options = [],
                                                                                                     parseError,
                                                                                                     helperText,
                                                                                                     formLabelProps,
                                                                                                     ...toggleButtonGroupProps
                                                                                                 }: ToggleButtonGroupElementProps<TFieldValues>) {
    if (required && !validation.required) {
        validation.required = 'This field is required'
    }

    const isRequired = required || !!validation?.required;
    return (
        <Controller
            name={name}
            control={control}
            rules={validation}
            render={({field: {value, onChange, onBlur}, fieldState: {invalid, error}}) => {
                const renderHelperText = error ? (typeof parseError === 'function' ? parseError(error) : error.message) : helperText
                return (
                    <FormControl error={invalid} required={isRequired}>
                        {label &&
                            <FormLabel {...formLabelProps} error={invalid} required={isRequired}
                                       sx={{mb: 1, ...formLabelProps?.sx}}>{label}</FormLabel>}
                        <ToggleButtonGroup
                            {...toggleButtonGroupProps}
                            value={value}
                            onBlur={onBlur}
                            onChange={(event, val) => {
                                onChange(val)
                                if (typeof toggleButtonGroupProps.onChange === 'function') {
                                    toggleButtonGroupProps.onChange(event, val)
                                }
                            }}
                        >
                            {options.map(({label, id, ...toggleProps}) => (
                                <ToggleButton value={id} {...toggleProps} key={id}>{label}</ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                        {renderHelperText && <FormHelperText>{renderHelperText}</FormHelperText>}
                    </FormControl>
                )
            }}
        />
    )
}