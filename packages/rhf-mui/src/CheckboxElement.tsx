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

export type CheckboxElementProps<T extends FieldValues> = Omit<
  CheckboxProps,
  'name'
> & {
  validation?: ControllerProps['rules']
  name: Path<T>
  parseError?: (error: FieldError) => string
  label?: FormControlLabelProps['label']
  helperText?: string
  control?: Control<T>
  labelProps?: Omit<FormControlLabelProps, 'label' | 'control'>
  /**
   * Function to transform the value from the form controller to a boolean that can be used by the MUI Checkbox component.
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

export default function CheckboxElement<TFieldValues extends FieldValues>({
  name,
  validation = {},
  required,
  parseError,
  label,
  control,
  helperText,
  labelProps,
  parseValue = defaultTransform,
  transformValue = defaultTransform,
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
      render={({field: {value, onChange}, fieldState: {error}}) => {
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
                    sx={{
                      ...rest.sx,
                      color: error ? 'error.main' : undefined,
                    }}
                    value={value}
                    checked={!!parseValue(value)}
                    onChange={(ev) => {
                      onChange(transformValue(ev.target.checked))
                      if (typeof rest.onChange === 'function') {
                        rest.onChange(ev, !ev.target.checked)
                      }
                    }}
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
