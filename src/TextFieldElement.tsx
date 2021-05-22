import TextField from '@material-ui/core/TextField'
import { Controller } from 'react-hook-form'
import { TextFieldElementProps } from './formTypes'
import React from 'react'

export default function TextFieldElement({
  validation = {},
  parseError,
  type,
  required,
  name,
  ...rest
}: TextFieldElementProps): JSX.Element {
  if (required) {
    validation.required = 'This field is required'
  }
  if (type === 'email') {
    validation.pattern = {
      // eslint-disable-next-line no-useless-escape
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email address'
    }
  }
  return (
    <Controller
      name={name}
      rules={validation}
      render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) =>
        <TextField
          {...rest}
          name={name}
          value={value || ''}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          type={type}
          error={invalid}
          helperText={error ? (typeof parseError === 'function' ? parseError(error) : error.message) : rest.helperText}
        />
      }
    />
  )
}
