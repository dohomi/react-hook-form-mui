import {ReactNode, createElement, forwardRef, Ref, RefAttributes} from 'react'
import {MenuItem, TextField, TextFieldProps, useForkRef} from '@mui/material'
import {
  Control,
  FieldError,
  FieldValues,
  FieldPath,
  UseControllerProps,
  useController,
} from 'react-hook-form'
import {useFormError} from './FormErrorProvider'

export type SelectElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = Omit<TextFieldProps, 'name' | 'type' | 'onChange'> & {
  validation?: UseControllerProps<TFieldValues, TName>['rules']
  name: TName
  options?:
    | readonly {
        id: string | number
        label: string | number
        disabled?: boolean
      }[]
    | readonly any[]
  valueKey?: string
  labelKey?: string
  type?: 'string' | 'number'
  parseError?: (error: FieldError) => ReactNode
  objectOnChange?: boolean
  onChange?: (value: any) => void
  control?: Control<TFieldValues>
}

type SelectElementComponent = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: SelectElementProps<TFieldValues, TName> & RefAttributes<HTMLDivElement>
) => JSX.Element

const SelectElement = forwardRef(function SelectElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: SelectElementProps<TFieldValues, TName>,
  ref: Ref<HTMLDivElement>
): JSX.Element {
  const {
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
    inputRef,
    ...rest
  } = props

  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
  const isNativeSelect = !!rest.SelectProps?.native
  const ChildComponent = isNativeSelect ? 'option' : MenuItem

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

  // handle shrink on number input fields
  if (type === 'number' && typeof field.value !== 'undefined') {
    rest.InputLabelProps = rest.InputLabelProps || {}
    rest.InputLabelProps.shrink = true
  }

  const currentValue = field.value?.[valueKey] ?? field.value // try fetch key value

  return (
    <TextField
      {...rest}
      name={name}
      value={currentValue ?? ''}
      onBlur={field.onBlur}
      ref={ref}
      onChange={(event) => {
        let item: number | string = event.target.value
        if (type === 'number' && item) {
          item = Number(item)
        }
        field.onChange(item)
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
      inputRef={handleInputRef}
    >
      {isNativeSelect && <option />}
      {options.map((item: any) =>
        createElement(
          ChildComponent,
          {
            key: `${name}_${item[valueKey]}`,
            value: item?.[valueKey] ?? item,
            disabled: item?.disabled ?? false,
          },
          item[labelKey]
        )
      )}
    </TextField>
  )
}) as SelectElementComponent

export default SelectElement
