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
  SelectProps,
} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'
import {useFormError} from './FormErrorProvider'
import {ReactNode} from 'react'

export type MultiSelectElementProps<T extends FieldValues> = Omit<
  SelectProps,
  'value'
> & {
  options: {id: string | number; label: string}[] | any[]
  label?: string
  itemKey?: string
  itemValue?: string
  itemLabel?: string
  required?: boolean
  validation?: any
  name: Path<T>
  parseError?: (error: FieldError) => ReactNode
  minWidth?: number
  menuMaxHeight?: number
  menuMaxWidth?: number
  helperText?: ReactNode
  showChips?: boolean
  preserveOrder?: boolean
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
  preserveOrder,
  control,
  showCheckbox,
  formControlProps,
  ...rest
}: MultiSelectElementProps<TFieldValues>): JSX.Element {
  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
  const renderLabel = (item: any) =>
    options.find((op) => {
      const optionVal = op[itemValue || itemKey] ?? op
      return optionVal === item
    })?.[itemLabel] ?? item

  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({
        field: {value, onChange, onBlur, ref},
        fieldState: {error},
      }) => {
        const parsedHelperText = error
          ? typeof customErrorFn === 'function'
            ? customErrorFn(error)
            : error.message
          : helperText
        return (
          <FormControl
            {...formControlProps}
            style={{
              ...formControlProps?.style,
              minWidth,
            }}
            variant={rest.variant}
            fullWidth={rest.fullWidth}
            error={!!error}
            size={rest.size}
          >
            {label && (
              <InputLabel
                size={rest.size === 'small' ? 'small' : undefined}
                error={!!error}
                htmlFor={rest.id || `select-multi-select-${name}`}
                required={required}
              >
                {label}
              </InputLabel>
            )}
            <Select
              {...rest}
              id={rest.id || `select-multi-select-${name}`}
              multiple
              label={label || undefined}
              error={!!error}
              value={value || []}
              required={required}
              onChange={onChange}
              onBlur={onBlur}
              MenuProps={{
                ...rest.MenuProps,
                PaperProps: {
                  ...(rest.MenuProps?.PaperProps ?? {
                    style: {
                      maxHeight: menuMaxHeight,
                      width: menuMaxWidth,
                      ...rest.MenuProps?.PaperProps?.style,
                    },
                  }),
                },
              }}
              renderValue={
                typeof rest.renderValue === 'function'
                  ? rest.renderValue
                  : showChips
                  ? (selected) => (
                      <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {(preserveOrder
                          ? options.filter((option) =>
                              (selected as any[]).includes(option)
                            )
                          : (selected as any[]) || []
                        ).map((selectedValue) => (
                          <Chip
                            key={selectedValue}
                            label={renderLabel(selectedValue)}
                            style={{display: 'flex', flexWrap: 'wrap'}}
                            onDelete={() => {
                              onChange(
                                value.filter((i: any) => i !== selectedValue)
                              )
                              // setValue(name, formValue.filter((i: any) => i !== value), { shouldValidate: true })
                            }}
                            deleteIcon={
                              <CloseIcon
                                onMouseDown={(ev) => {
                                  ev.stopPropagation()
                                }}
                              />
                            }
                          />
                        ))}
                      </div>
                    )
                  : (selected) =>
                      Array.isArray(selected)
                        ? selected.map(renderLabel).join(', ')
                        : ''
              }
              inputRef={ref}
            >
              {options.map((item) => {
                const val: string | number = item[itemValue || itemKey] || item
                const isChecked = Array.isArray(value)
                  ? value.includes(val)
                  : false
                return (
                  <MenuItem
                    key={val}
                    value={val}
                    sx={{
                      fontWeight: (theme) =>
                        isChecked
                          ? theme.typography.fontWeightBold
                          : theme.typography.fontWeightRegular,
                    }}
                  >
                    {showCheckbox && <Checkbox checked={isChecked} />}
                    <ListItemText primary={item[itemLabel] || item} />
                  </MenuItem>
                )
              })}
            </Select>
            {parsedHelperText && (
              <FormHelperText error={!!error}>
                {parsedHelperText}
              </FormHelperText>
            )}
          </FormControl>
        )
      }}
    />
  )
}
