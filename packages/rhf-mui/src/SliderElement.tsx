import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form'
import {
  FormControl,
  FormControlProps,
  FormHelperText,
  FormLabel,
  Slider,
  SliderProps,
} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'
import {useFormError} from './FormErrorProvider'
import {ReactNode} from 'react'

export type SliderElementProps<T extends FieldValues> = Omit<
  SliderProps,
  'control'
> & {
  name: Path<T>
  control?: Control<T>
  label?: string
  rules?: ControllerProps<T>['rules']
  parseError?: (error: FieldError) => ReactNode
  required?: boolean
  formControlProps?: FormControlProps
}

export default function SliderElement<TFieldValues extends FieldValues>({
  name,
  control,
  label,
  rules = {},
  parseError,
  required,
  formControlProps,
  ...other
}: SliderElementProps<TFieldValues>) {
  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
  if (required && !rules.required) {
    rules.required = 'This field is required'
  }
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, value}, fieldState: {invalid, error}}) => {
        const parsedHelperText = error
          ? typeof customErrorFn === 'function'
            ? customErrorFn(error)
            : error.message
          : null
        return (
          <FormControl
            error={invalid}
            required={required}
            fullWidth
            {...formControlProps}
          >
            {label && (
              <FormLabel component="legend" error={invalid}>
                {label}
              </FormLabel>
            )}
            <Slider
              {...other}
              value={value}
              onChange={onChange}
              valueLabelDisplay={other.valueLabelDisplay || 'auto'}
            />
            {parsedHelperText && (
              <FormHelperText error={invalid}>
                {parsedHelperText}
              </FormHelperText>
            )}
          </FormControl>
        )
      }}
    />
  )
}
