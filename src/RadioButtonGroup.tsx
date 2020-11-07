import React, { ChangeEvent } from 'react'
import Radio, { RadioProps } from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import { red } from '@material-ui/core/colors'
import useFormValidation from './helpers/useFormValidation'
import { RadioButtonGroupProps } from './formTypes'

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
  onChange,
  returnObject
}: RadioButtonGroupProps): JSX.Element {
  const classes = useStyles()
  const { formValue, errorMessages, setValue } = useFormValidation({
    name,
    parseError,
    required
  })

  helperText = errorMessages || helperText
  const hasError = !!errorMessages
  const radioProps: RadioProps = {}
  if (hasError) {
    radioProps.className = classes.root
  }

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const radioValue = (event.target as HTMLInputElement).value
    const returnValue = returnObject
      ? options.find(items => items[valueKey] === radioValue)
      : radioValue
    setValue(name, returnValue, { shouldValidate: true })
    onChange && onChange(returnValue)
  }

  return (
    <FormControl error={hasError}>
      {label && <FormLabel>{label}</FormLabel>}
      <RadioGroup onChange={onRadioChange} name={name} value={formValue}>
        {emptyOptionLabel && (
          <FormControlLabel
            control={<Radio {...radioProps} checked={!formValue} />}
            label={emptyOptionLabel}
            value=""
          />
        )}
        {options.map((option: any) => {
          // console.log(option, stateVal)
          const optionKey = option[valueKey]
          if (!optionKey) {
            console.error(
              `CheckboxButtonGroup: valueKey ${valueKey} does not exist on option`,
              option
            )
          }
          const isChecked = !!(
            formValue &&
            (returnObject
              ? formValue[valueKey] === optionKey
              : formValue === optionKey)
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
