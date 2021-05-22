import { CheckboxProps } from '@material-ui/core'
import React, { FormHTMLAttributes } from 'react'
import { DatePickerProps } from '@material-ui/pickers'
import { ControllerProps, FieldError, UseFormReturn } from 'react-hook-form'
import { SelectProps } from '@material-ui/core/Select'
import { TextFieldProps } from '@material-ui/core/TextField'

type ParseError = (error: FieldError) => string

export type CheckboxButtonGroupProps = {
  options: any[]
  helperText?: string
  name: string
  required?: boolean
  parseError?: ParseError
  label?: string
  labelKey?: string
  valueKey?: string
  onChange?: Function
  returnObject?: boolean
  disabled?: boolean
}
export type CheckboxElementProps = Omit<CheckboxProps, 'name'> & {
  validation?: ControllerProps['rules']
  name: string
  parseError?: ParseError
  label?: React.ReactNode
  helperText?: string
}
export type DatePickerElementProps = Omit<DatePickerProps, 'value' | 'onChange'> & {
  name: string
  required?: boolean
  isDate?: boolean
  parseError?: ParseError
  onChange?: Function
  validation?: ControllerProps['rules']
  parseDate?: (date: string) => string
}
export type FormContainerProps = {
  defaultValues?: any
  onSuccess?: () => void
  handleSubmit?: () => void
  formContext?: UseFormReturn<any>
  FormProps?: FormHTMLAttributes<HTMLFormElement>
}
export type MultiSelectElementProps = Omit<SelectProps, 'value'> & {
  menuItems: any
  label?: string
  itemKey?: string
  itemValue?: string
  itemLabel?: string
  required?: boolean
  validation?: any
  name: string
  parseError?: ParseError
  minWidth?: number
  menuMaxHeight?: number
  menuMaxWidth?: number
  helperText?: string
  showChips?: boolean
}
export type PasswordElementProps = TextFieldElementProps
export type RadioButtonGroupProps = {
  options: any[]
  helperText?: string
  name: string
  required?: boolean
  parseError?: ParseError
  label?: string
  labelKey?: string
  valueKey?: string
  type?: 'number' | 'string'
  emptyOptionLabel?: 'string'
  onChange?: Function
  returnObject?: boolean
}
export type SelectElementProps = Omit<TextFieldProps, 'name' | 'variant' | 'type'> & {
  validation?: ControllerProps['rules']
  name: string
  options?: any[]
  valueKey?: string
  labelKey?: string
  type?: 'string' | 'number'
  parseError?: ParseError
  objectOnChange?: boolean
  onChange?: Function
}
export type TextFieldElementProps = Omit<TextFieldProps,
  'name'> & {
  validation?: ControllerProps['rules']
  name: string
  parseError?: ParseError
}
