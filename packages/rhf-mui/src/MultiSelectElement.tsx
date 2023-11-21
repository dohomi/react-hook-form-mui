import CloseIcon from '@mui/icons-material/Cancel'
import {
  Control,
  FieldError,
  FieldValues,
  FieldPath,
  UseControllerProps,
  useController,
} from 'react-hook-form'
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
  useForkRef,
} from '@mui/material'
import {useFormError} from './FormErrorProvider'
import {ReactNode, forwardRef, RefAttributes, Ref} from 'react'

export type MultiSelectElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<SelectProps, 'value'> & {
  options: {id: string | number; label: string}[] | any[]
  label?: string
  itemKey?: string
  itemValue?: string
  itemLabel?: string
  required?: boolean
  validation?: UseControllerProps<TFieldValues, TName>['rules']
  name: TName
  parseError?: (error: FieldError) => ReactNode
  minWidth?: number
  menuMaxHeight?: number
  menuMaxWidth?: number
  helperText?: ReactNode
  showChips?: boolean
  preserveOrder?: boolean
  control?: Control<TFieldValues>
  showCheckbox?: boolean
  formControlProps?: Omit<FormControlProps, 'fullWidth' | 'variant'>
}

type MultiSelectElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: MultiSelectElementProps<TFieldValues, TName> &
    RefAttributes<HTMLDivElement>
) => JSX.Element

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

const MultiSelectElement = forwardRef(function MultiSelectElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: MultiSelectElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
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
    inputRef,
    ...rest
  } = props

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn

  const renderLabel = (item: any) =>
    options.find((op) => {
      const optionVal = op[itemValue || itemKey] ?? op
      return optionVal === item
    })?.[itemLabel] ?? item

  const rules = {
    ...validation,
    ...(required &&
      !validation.required && {
      required: 'This field is required',
    }),
  }

  const {
    field,
    fieldState: {error},
  } = useController({
    name,
    rules,
    control,
  })

  const handleInputRef = useForkRef(field.ref, inputRef)

  const renderHelperText = error
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
      ref={ref}
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
        value={field.value || []}
        required={required}
        onChange={field.onChange}
        onBlur={field.onBlur}
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
                        field.onChange(
                          field.value.filter((i: any) => i !== selectedValue)
                        )
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
        inputRef={handleInputRef}
      >
        {options.map((item) => {
          const val: string | number = item[itemValue || itemKey] || item
          const isChecked = Array.isArray(field.value)
            ? field.value.includes(val)
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
      {renderHelperText && (
        <FormHelperText error={!!error}>{renderHelperText}</FormHelperText>
      )}
    </FormControl>
  )
}) as MultiSelectElementComponent

export default MultiSelectElement
