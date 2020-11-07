import React from 'react'
import { DatePicker } from '@material-ui/pickers'
import { Controller, useFormContext } from 'react-hook-form'
import getNestedValue from './helpers/getNestedValue'
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date'
import getErrorMessages from './helpers/getErrorMessages'
import { DatePickerElementProps } from './formTypes'

export default function DatePickerElement({
  isDate,
  parseError,
  name,
  required,
  validation = {},
  ...rest
}: DatePickerElementProps): JSX.Element {
  const { errors, getValues, control, setValue } = useFormContext()
  const formValue: any = getNestedValue(getValues(), name)
  const value = formValue || undefined
  if (required) {
    validation.required = 'This field is required'
  }

  function onChange(date: MaterialUiPickersDate): void {
    const parsedDate =
      isDate && date ? date && date.toISOString().substr(0, 10) : date
    setValue(name, parsedDate, { shouldValidate: true })
    rest.onChange && rest.onChange(parsedDate)
  }

  const errorMessages = getErrorMessages(name, errors, parseError)

  return (
    <Controller
      name={name}
      required={!!required}
      control={control}
      rules={validation}
      as={
        <DatePicker
          {...rest}
          value={value}
          onChange={onChange}
          error={!!errorMessages}
          helperText={errorMessages || rest.helperText}
        />
      }
    />
  )
}
