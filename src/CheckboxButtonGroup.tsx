import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import { red } from '@material-ui/core/colors'
import { Checkbox } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup'
import { CheckboxProps } from '@material-ui/core/Checkbox'
import { CheckboxButtonGroupProps } from './formTypes'
import { useController } from 'react-hook-form'

const useStyles = makeStyles({
  root: {
    color: red[400]
  }
})

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
