import universal from 'react-universal-component'
import { FC } from 'react'
import {
  CheckboxButtonGroupProps,
  CheckboxElementProps,
  DatePickerElementProps,
  FormContainerProps,
  MultiSelectElementProps,
  PasswordElementProps,
  RadioButtonGroupProps,
  SelectElementProps,
  TextFieldElementProps
} from './formTypes'

const TextFieldElement = universal(import('./TextFieldElement')) as FC<TextFieldElementProps>
const FormContainer = universal(import('./FormContainer')) as FC<FormContainerProps>
const RadioButtonGroup = universal(import('./RadioButtonGroup')) as FC<RadioButtonGroupProps>
const CheckboxButtonGroup = universal(import('./CheckboxButtonGroup')) as FC<CheckboxButtonGroupProps>
const CheckboxElement = universal(import('./CheckboxElement')) as FC<CheckboxElementProps>
const PasswordElement = universal(import('./PasswordElement')) as FC<PasswordElementProps>
const SelectElement = universal(import('./SelectElement')) as FC<SelectElementProps>
const MultiSelectElement = universal(import('./MultiSelectElement')) as FC<MultiSelectElementProps>
const DatePickerElement = universal(import('./DatePickerElement')) as FC<DatePickerElementProps>

export {
  TextFieldElement,
  FormContainer,
  RadioButtonGroup,
  CheckboxButtonGroup,
  CheckboxElement,
  PasswordElement,
  SelectElement,
  DatePickerElement,
  MultiSelectElement
}

export type {
  CheckboxButtonGroupProps,
  FormContainerProps,
  CheckboxElementProps,
  DatePickerElementProps,
  MultiSelectElementProps,
  PasswordElementProps,
  RadioButtonGroupProps,
  SelectElementProps,
  TextFieldElementProps
} from './formTypes'

