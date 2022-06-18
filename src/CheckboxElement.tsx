import { Control, Controller, ControllerProps, FieldError } from 'react-hook-form'
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormControlLabelProps,
  FormGroup,
  FormHelperText
} from '@mui/material'

export type CheckboxElementProps = Omit<CheckboxProps, 'name'> & {
  validation?: ControllerProps['rules']
  name: string
  parseError?: (error: FieldError) => string
  label?: FormControlLabelProps['label']
  helperText?: string
  control?: Control<any>
}

export default function CheckboxElement({
  name,
  validation = {},
  required,
  parseError,
  label,
  control,
  helperText,
  ...rest
}: CheckboxElementProps): JSX.Element {

  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({ field: { value, onChange }, fieldState: { invalid, error } }) => {
        const parsedHelperText = error ? (typeof parseError === 'function' ? parseError(error) : error.message) : helperText
        return (
          <FormControl required={required} error={invalid}>
            <FormGroup row>
              <FormControlLabel
                label={label || ''}
                control={
                  <Checkbox
                    {...rest}
                    color={rest.color || 'primary'}
                    sx={{
                      ...rest.sx,
                      color: invalid ? 'error.main' : undefined
                    }}
                    value={value}
                    checked={!!value}
                    onChange={() => {
                      onChange(!value)
                    }}
                  />
                }
              />
            </FormGroup>
            {parsedHelperText && <FormHelperText error={invalid}>{parsedHelperText}</FormHelperText>}
          </FormControl>
        )
      }}
    />
  )
}
