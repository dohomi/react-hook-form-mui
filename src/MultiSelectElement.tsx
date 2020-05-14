import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select, { SelectProps } from '@material-ui/core/Select'
import useFormValidation from './helpers/useFormValidation'
import FormHelperText from '@material-ui/core/FormHelperText'

type Props = {
  menuItems: any
  label?: string
  itemKey?: string
  itemValue?: string
  itemLabel?: string
  required?: boolean
  validation?: any
  name: string
  parseError?: Function
  minWidth?: number
  menuMaxHeight?: number
  menuMaxWidth?: number
  helperText?: string
}

export type MultiSelectElementProps = Omit<SelectProps, 'value'> & Props

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MultiSelectElement: React.FunctionComponent<MultiSelectElementProps> = ({
  menuItems,
  label = '',
  itemKey = '',
  itemValue = '',
  itemLabel = '',
  required = false,
  validation = {},
  parseError,
  name,
  menuMaxHeight = ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  menuMaxWidth = 250,
  minWidth = 120,
  helperText,
  ...rest
}) => {
  const { formValue, setValue, errorMessages } = useFormValidation({
    name,
    parseError,
    required,
  })

  if (required) {
    validation.required = 'required'
  }
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setValue(name, event.target.value, true)
  }

  helperText = errorMessages || helperText
  return (
    <FormControl
      style={{ minWidth }}
      fullWidth={rest.fullWidth}
      error={!!errorMessages}
    >
      <InputLabel htmlFor="select-multiple" required={required}>
        {label}
      </InputLabel>
      <Select
        {...rest}
        multiple
        value={formValue || []}
        required={required}
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: menuMaxHeight,
              width: menuMaxWidth,
            },
          },
        }}
        inputProps={{
          error: errorMessages,
        }}
      >
        {menuItems.map((item: any) => (
          <MenuItem
            key={!!itemKey ? item[itemKey] : item}
            value={itemValue ? item[itemValue] : item}
            style={{
              fontWeight: (formValue || []).includes(item) ? 'bold' : 'normal',
            }}
          >
            {itemLabel ? item[itemLabel] : item}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export default MultiSelectElement
