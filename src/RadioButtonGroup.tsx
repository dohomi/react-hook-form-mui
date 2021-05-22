import React, { ChangeEvent } from 'react'
import Radio, { RadioProps } from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import { red } from '@material-ui/core/colors'
import { RadioButtonGroupProps } from './formTypes'
import { useController } from 'react-hook-form'

const useStyles = makeStyles({
  root: {
    color: red[400]
  }
})

export default function RadioButtonGroup({
  helperText,
  options,
  label,
  name,
  parseError,
  labelKey = 'label',
  valueKey = 'id',
  required,
  emptyOptionLabel,
  returnObject,
  ...rest
}: RadioButtonGroupProps): JSX.Element {
  const classes = useStyles()
  const { field: { value, onChange }, fieldState: { invalid, error } } = useController({
    name,
    rules: required ? { required: 'This field is required' } : undefined
  })

  helperText = error ? (typeof parseError === 'function' ? parseError(error) : error.message) : helperText

  const radioProps: RadioProps = {}
  if (invalid) {
    radioProps.className = classes.root
  }

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const radioValue = (event.target as HTMLInputElement).value
    const returnValue = returnObject
      ? options.find(items => items[valueKey] === radioValue)
      : radioValue
    // setValue(name, returnValue, { shouldValidate: true })
    onChange(returnValue)
    if (typeof rest.onChange === 'function') {
      rest.onChange(returnValue)
    }
  }

  return (
    <FormControl error={invalid}>
      {label && <FormLabel required={required} error={invalid}>{label}</FormLabel>}
      <RadioGroup onChange={onRadioChange}
                  name={name}
                  value={value || ''}>
        {emptyOptionLabel && (
          <FormControlLabel
            control={<Radio {...radioProps} checked={!value} />}
            label={emptyOptionLabel}
            value=""
          />
        )}
        {options.map((option: any) => {
          const optionKey = option[valueKey]
          if (!optionKey) {
            console.error(
              `CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`,
              option
            )
          }
          const isChecked = !!(
            value &&
            (returnObject
              ? value[valueKey] === optionKey
              : value === optionKey)
          )
          return (
            <FormControlLabel
              control={<Radio {...radioProps} checked={isChecked} />}
              value={optionKey}
              label={option[labelKey]}
              key={optionKey}
            />
          )
        })}
      </RadioGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
