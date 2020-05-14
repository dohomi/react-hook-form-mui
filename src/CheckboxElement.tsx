import React, { FunctionComponent } from 'react'
import { CheckboxProps } from '@material-ui/core'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '@material-ui/core/FormControl'
import useFormValidation from './helpers/useFormValidation'
import { red } from '@material-ui/core/colors'

const CheckboxElement: FunctionComponent<Omit<CheckboxProps, 'name'> & {
  validation?: any
  name: string
  parseError?: Function
  label?: React.ReactNode
  helperText?: string
}> = ({ name, validation = {}, required, parseError, label, ...rest }) => {
  const { setValue, formValue, errorMessages } = useFormValidation({
    parseError,
    name,
    required,
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
                color: errorMessages ? red[400] : undefined,
              }}
              value={formValue}
              checked={!!formValue}
              onChange={() => setValue(name, !formValue, true)}
            />
          }
        />
      </FormGroup>
      <FormHelperText>{errorMessages || rest.helperText}</FormHelperText>
    </FormControl>
  )
}

export default CheckboxElement
