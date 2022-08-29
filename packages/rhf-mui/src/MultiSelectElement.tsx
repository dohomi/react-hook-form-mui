import CloseIcon from '@mui/icons-material/Cancel'
import {Control, Controller, FieldError, Path} from 'react-hook-form'
import {
  Checkbox,
  Chip,
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectProps
} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'

export type MultiSelectElementProps<T> = Omit<SelectProps, 'value'> & {
    options: { id: string | number, label: string }[] | any[]
    label?: string
    itemKey?: string
    itemValue?: string
    itemLabel?: string
    required?: boolean
    validation?: any
    name: Path<T>
    parseError?: (error: FieldError) => string
    minWidth?: number
    menuMaxHeight?: number
    menuMaxWidth?: number
    helperText?: string
    showChips?: boolean
    control?: Control<T>
    showCheckbox?: boolean
    formControlProps?: Omit<FormControlProps, 'fullWidth' | 'variant'>
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

export default function MultiSelectElement<TFieldValues extends FieldValues>({
  options,
  label = '',
  itemKey = 'id',
  itemValue = '',
  itemLabel = 'label',
  required = false,
  validation = {},
  parseError,
  name,
  menuMaxHeight = ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  menuMaxWidth = 250,
  minWidth = 120,
  helperText,
  showChips,
  control,
  showCheckbox,
  formControlProps,
  ...rest
}: MultiSelectElementProps<TFieldValues>): JSX.Element {

  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({field: {value, onChange, onBlur}, fieldState: {invalid, error}}) => {
        helperText = error ? (typeof parseError === 'function' ? parseError(error) : error.message) : helperText
        return (
          <FormControl
            {...formControlProps}
            style={{
              ...formControlProps?.style,
              minWidth,
            }}
            variant={rest.variant}
            fullWidth={rest.fullWidth}
            error={invalid}
          >
            {label && (
              <InputLabel error={invalid} htmlFor={rest.id || `select-multi-select-${name}`}
                required={required}>
                {label}
              </InputLabel>
            )}
            <Select
              {...rest}
              id={rest.id || `select-multi-select-${name}`}
              multiple
              label={label || undefined}
              error={invalid}
              value={value || []}
              required={required}
              onChange={onChange}
              onBlur={onBlur}
              MenuProps={{
                ...rest.MenuProps,
                PaperProps: {
                  ...rest.MenuProps?.PaperProps ?? {
                    style: {
                      maxHeight: menuMaxHeight,
                      width: menuMaxWidth,
                      ...rest.MenuProps?.PaperProps?.style
                    }
                  }
                }
              }}
              renderValue={typeof rest.renderValue === 'function' ? rest.renderValue : showChips ? (selected) => (
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  {(selected as any[] || []).map((selectedValue) => (
                    <Chip
                      key={selectedValue}
                      label={selectedValue}
                      style={{display: 'flex', flexWrap: 'wrap'}}
                      onDelete={() => {
                        onChange(value.filter((i: any) => i !== selectedValue))
                        // setValue(name, formValue.filter((i: any) => i !== value), { shouldValidate: true })
                      }}
                      deleteIcon={<CloseIcon
                        onMouseDown={(ev) => {
                          ev.stopPropagation()
                        }}/>
                      }
                    />
                  ))}
                </div>
              ) : (selected) => Array.isArray(selected) ? selected.join(', ') : ''}
            >
              {options.map((item) => {
                const val: string | number = item[itemValue || itemKey] || item
                const isChecked = Array.isArray(value) ? value.includes(val) : false
                return (
                  <MenuItem
                    key={val}
                    value={val}
                    sx={{
                      fontWeight: (theme) => isChecked ? theme.typography.fontWeightBold : theme.typography.fontWeightRegular
                    }}
                  >
                    {showCheckbox && <Checkbox checked={isChecked}/>}
                    <ListItemText primary={item[itemLabel] || item}/>
                  </MenuItem>
                )
              })}
            </Select>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
          </FormControl>
        )
      }}
    />
  )
}

