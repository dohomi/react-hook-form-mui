import React from 'react'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import { red } from '@material-ui/core/colors'
import { CheckboxElementProps } from './formTypes'
import { Controller } from 'react-hook-form'

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
