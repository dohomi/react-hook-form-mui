import React from 'react'
import { red } from '@mui/material/colors'
import { Controller, ControllerProps, FieldError } from 'react-hook-form'
import { Checkbox, CheckboxProps, FormControl, FormControlLabel, FormGroup, FormHelperText } from '@mui/material'

export type CheckboxElementProps = Omit<CheckboxProps, 'name'> & {
  validation?: ControllerProps['rules']
  name: string
  parseError?: (error: FieldError) => string
  label?: React.ReactNode
  helperText?: string
}

export default function CheckboxElement({
  name,
  validation = {},
  required,
  parseError,
  label,
  ...rest
}: CheckboxElementProps): JSX.Element {

  if (required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      render={({ field: { value, onChange }, fieldState: { invalid, error } }) => {
        const helperText = error ? (typeof parseError === 'function' ? parseError(error) : error.message) : rest.helperText
        return (
          <FormControl required={required} error={invalid}>
            <FormGroup row>
              <FormControlLabel
                label={label}
                control={
                  <Checkbox
                    color={'primary'}
                    style={{
                      color: invalid ? red[400] : undefined
                    }}
                    value={value}
                    checked={!!value}
                    onChange={() => {
                      onChange(!value)
                      //setValue(name, !formValue, { shouldValidate: true })
                    }}
                  />
                }
              />
            </FormGroup>
            {helperText && <FormHelperText error={invalid}>{helperText}</FormHelperText>}
          </FormControl>
        )
      }}
    />
  )
}
