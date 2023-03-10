import {createElement} from 'react'
import {MenuItem, TextField, TextFieldProps} from '@mui/material'
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form'
import {FieldValues} from 'react-hook-form/dist/types/fields'
import {useFormError} from './FormErrorProvider'

export type SelectElementProps<T extends FieldValues> = Omit<
  TextFieldProps,
  'name' | 'type' | 'onChange'
> & {
  validation?: ControllerProps['rules']
  name: Path<T>
  options?: {id: string | number; label: string | number}[] | any[]
  valueKey?: string
  labelKey?: string
  type?: 'string' | 'number'
  parseError?: (error: FieldError) => string
  objectOnChange?: boolean
  onChange?: (value: any) => void
  control?: Control<T>
}

export default function SelectElement<TFieldValues extends FieldValues>({
  name,
  required,
  valueKey = 'id',
  labelKey = 'label',
  options = [],
  parseError,
  type,
  objectOnChange,
  validation = {},
  control,
  ...rest
}: SelectElementProps<TFieldValues>): JSX.Element {
  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
  const isNativeSelect = !!rest.SelectProps?.native
  const ChildComponent = isNativeSelect ? 'option' : MenuItem

  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      render={({
        field: {onBlur, onChange, value, ref},
        fieldState: {error},
      }) => {
        // handle shrink on number input fields
        if (type === 'number' && typeof value !== 'undefined') {
          rest.InputLabelProps = rest.InputLabelProps || {}
          rest.InputLabelProps.shrink = true
        }
        if (typeof value === 'object') {
          value = value[valueKey] // if value is object get key
        }
        return (
          <TextField
            {...rest}
            name={name}
            value={value ?? ''}
            onBlur={onBlur}
            onChange={(event) => {
              let item: number | string = event.target.value
              if (type === 'number' && item) {
                item = Number(item)
              }
              onChange(item)
              if (typeof rest.onChange === 'function') {
                if (objectOnChange) {
                  item = options.find((i) => i[valueKey] === item)
                }
                rest.onChange(item)
              }
            }}
            select
            required={required}
            error={!!error}
            helperText={
              error
                ? typeof customErrorFn === 'function'
                  ? customErrorFn(error)
                  : error.message
                : rest.helperText
            }
            inputRef={ref}
          >
            {isNativeSelect && <option />}
            {options.map((item: any) =>
              createElement(
                ChildComponent,
                {
                  key: `${name}_${item[valueKey]}`,
                  value: item[valueKey],
                },
                item[labelKey]
              )
            )}
          </TextField>
        )
      }}
    />
  )
}
