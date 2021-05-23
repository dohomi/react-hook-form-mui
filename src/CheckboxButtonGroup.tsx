import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel
} from '@material-ui/core'
import { FieldError, useController } from 'react-hook-form'

const useStyles = makeStyles({
  root: {
    color: red[400]
  }
})

export type CheckboxButtonGroupProps = {
  options: any[]
  helperText?: string
  name: string
  required?: boolean
  parseError?: (error: FieldError) => string
  label?: string
  labelKey?: string
  valueKey?: string
  onChange?: Function
  returnObject?: boolean
  disabled?: boolean
}

export default function CheckboxButtonGroup({
  helperText,
  options,
  label,
  name,
  parseError,
  required,
  labelKey = 'label',
  valueKey = 'id',
  returnObject,
  disabled,
  ...rest
}: CheckboxButtonGroupProps): JSX.Element {
  const classes = useStyles()
  const { field: { value = [], onChange }, fieldState: { invalid, error } } = useController({
    name,
    rules: required ? { required: 'This field is required' } : undefined
  })

  helperText = error ? (typeof parseError === 'function' ? parseError(error) : error.message) : helperText

  const handleChange = (index: number | string) => {
    const newArray = [...value]
    const exists =
      value.findIndex((i: any) =>
        returnObject ? i[valueKey] === index : i === index
      ) === -1
    if (exists) {
      newArray.push(
        returnObject ? options.find(i => i[valueKey] === index) : index
      )
    } else {
      newArray.splice(
        value.findIndex((i: any) =>
          returnObject ? i[valueKey] === index : i === index
        ),
        1
      )
    }
    // setValue(name, newArray, { shouldValidate: true })
    onChange(newArray)
    if (typeof rest.onChange === 'function') {
      rest.onChange(newArray)
    }
  }
  const checkboxProps: CheckboxProps = {}
  if (invalid) {
    checkboxProps.className = classes.root
  }

  return (
    <FormControl error={invalid} required={required}>
      {label && <FormLabel error={invalid}>{label}</FormLabel>}
      <FormGroup>
        {options.map((option: any) => {
          const optionKey = option[valueKey]
          if (!optionKey) {
            console.error(
              `CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`,
              option
            )
          }
          const isChecked =
            value.findIndex((item: any) =>
              returnObject ? item[valueKey] === optionKey : item === optionKey
            ) !== -1
          return (
            <FormControlLabel
              control={
                <Checkbox
                  {...checkboxProps}
                  color="primary"
                  value={optionKey}
                  checked={isChecked}
                  disabled={disabled}
                  onChange={() => handleChange(optionKey)}
                />
              }
              label={option[labelKey]}
              key={optionKey}
            />
          )
        })}
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
