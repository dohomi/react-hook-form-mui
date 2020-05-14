import React from 'react'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import { Controller, useFormContext } from 'react-hook-form'
import getErrorMessages from './helpers/getErrorMessages'

export type TextFieldElementProps = Omit<TextFieldProps,
  'name' | 'variant'> & {
  validation?: any
  name: string
  parseError?: Function
}

/**
 * Important: variant is not part of props due to nasty and un-resolvable. you can't use variant only as provider props
 *
 * See: https://github.com/mui-org/material-ui/issues/15697
 */
export function TextFieldElement({
  validation = {},
  parseError,
  type,
  required,
  name,
  ...rest
}: TextFieldElementProps): JSX.Element {
  const { errors, control } = useFormContext()

  // const formValue: any = getNestedValue(getValues({ nest: true }), name)
  // const value = formValue || ''
  if (required) {
    validation.required = 'This field is required'
  }
  if (type === 'email') {
    validation.pattern = {
      // eslint-disable-next-line no-useless-escape
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'email'
    }
  }
  const errorMessages = getErrorMessages(name, errors, parseError)
  return (
    <Controller
      required={required}
      name={name}
      control={control}
      rules={validation}
      as={
        <TextField
          {...rest}
          type={type}
          error={!!errorMessages}
          helperText={errorMessages || rest.helperText}
        />
      }
    />
  )
}
