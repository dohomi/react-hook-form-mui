import React from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import useFormValidation from './helpers/useFormValidation'
import FormHelperText from '@material-ui/core/FormHelperText'
import Chip from '@material-ui/core/Chip'
import CloseIcon from '@material-ui/icons/Cancel'
import { MultiSelectElementProps } from './formTypes'


const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

export default function MultiSelectElement({
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
  showChips,
  variant,
  ...rest
}: MultiSelectElementProps): JSX.Element {
  const { formValue, setValue, errorMessages } = useFormValidation({
    name,
    parseError,
    required
  })

  if (required) {
    validation.required = 'required'
  }
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setValue(name, event.target.value, { shouldValidate: true })
  }

  helperText = errorMessages || helperText

  if (showChips) {
    rest.renderValue = (selected) => (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {(selected as any[] || []).map((value) => (
          <Chip key={value} label={value} style={{ display: 'flex', flexWrap: 'wrap' }}
                onDelete={() => {
                  setValue(name, formValue.filter((i: any) => i !== value), { shouldValidate: true })
                }} deleteIcon={<CloseIcon onMouseDown={(ev) => {
            ev.stopPropagation()
          }
          } />} />
        ))}
      </div>
    )
  }
  return (
    <FormControl
      variant={variant}
      style={{ minWidth }}
      fullWidth={rest.fullWidth}
      error={!!errorMessages}
    >
      <InputLabel htmlFor={rest.id || `select-multi-select-${name}`} required={required}>
        {label}
      </InputLabel>
      <Select
        id={rest.id || `select-multi-select-${name}`}
        {...rest}
        label={label}
        multiple
        value={formValue || []}
        required={required}
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: menuMaxHeight,
              width: menuMaxWidth
            }
          }
        }}
        inputProps={{
          error: errorMessages
        }}
      >
        {menuItems.map((item: any) => (
          <MenuItem
            key={!!itemKey ? item[itemKey] : item}
            value={itemValue ? item[itemValue] : item}
            style={{
              fontWeight: (formValue || []).includes(item) ? 'bold' : 'normal'
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

