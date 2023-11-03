import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form'
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormGroup,
  FormHelperText,
} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'
import {useFormError} from './FormErrorProvider'
import {ReactNode} from 'react'

export type CheckboxElementProps<T extends FieldValues> = Omit<
  CheckboxProps,
  'name'
> & {
  validation?: ControllerProps<T>['rules']
  name: Path<T>
  parseError?: (error: FieldError) => ReactNode
  label?: FormControlLabelProps['label']
  helperText?: string
  control?: Control<T>
  labelProps?: Omit<FormControlLabelProps, 'label' | 'control'>
}

export default function CheckboxElement<TFieldValues extends FieldValues>({
  name,
  validation = {},
  required,
  parseError,
  label,
  control,
  helperText,
  labelProps,
  ...rest
}: CheckboxElementProps<TFieldValues>): JSX.Element {
  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({field: {value, onChange, ref}, fieldState: {error}}) => {
        const parsedHelperText = error
          ? typeof customErrorFn === 'function'
            ? customErrorFn(error)
            : error.message
          : helperText
        return (
          <FormControl required={required} error={!!error}>
            <FormGroup row>
              <FormControlLabel
                {...labelProps}
                label={label || ''}
                control={
                  <Checkbox
                    {...rest}
                    color={rest.color || 'primary'}
                    sx={[
                      ...(Array.isArray(rest.sx) ? rest.sx : [rest.sx]),
                      {
                        color: error ? 'error.main' : undefined,
                      },
                    ]}
                    value={value}
                    checked={!!value}
                    onChange={(ev) => {
                      onChange(!value)
                      if (typeof rest.onChange === 'function') {
                        rest.onChange(ev, !value)
                      }
                    }}
                    inputRef={ref}
                  />
                }
              />
            </FormGroup>
            {parsedHelperText && (
              <FormHelperText error={!!error}>
                {parsedHelperText}
              </FormHelperText>
            )}
          </FormControl>
        )
      }}
    />
  )
}
