import React from 'react'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import useFormValidation from './helpers/useFormValidation'
import { red } from '@material-ui/core/colors'
import { CheckboxElementProps } from './formTypes'

export default function CheckboxElement({
  name, validation = {},
  required,
  parseError,
  label,
  ...rest
}: CheckboxElementProps): JSX.Element {
  const { setValue, formValue, errorMessages } = useFormValidation({
    parseError,
    name,
    required
  })

  return (
    <FormControl required={required} error={!!errorMessages}>
      <FormGroup row>
        <FormControlLabel
          label={label}
          control={
            <Checkbox
              color={'primary'}
              style={{
                color: errorMessages ? red[400] : undefined
              }}
              value={formValue}
              checked={!!formValue}
              onChange={() => setValue(name, !formValue, { shouldValidate: true })}
            />
          }
        />
      </FormGroup>
      <FormHelperText>{errorMessages || rest.helperText}</FormHelperText>
    </FormControl>
  )
}
