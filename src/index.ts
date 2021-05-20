import universal from 'react-universal-component'
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

const TextFieldElement = universal<TextFieldElementProps>(import('./TextFieldElement'))
const FormContainer = universal<FormContainerProps>(import('./FormContainer'))
const RadioButtonGroup = universal<RadioButtonGroupProps>(import('./RadioButtonGroup'))
const CheckboxButtonGroup = universal<CheckboxButtonGroupProps>(import('./CheckboxButtonGroup'))
const CheckboxElement = universal<CheckboxElementProps>(import('./CheckboxElement'))
const PasswordElement = universal<PasswordElementProps>(import('./PasswordElement'))
const SelectElement = universal<SelectElementProps>(import('./SelectElement'))
const MultiSelectElement = universal<MultiSelectElementProps>(import('./MultiSelectElement'))
const DatePickerElement = universal<DatePickerElementProps>(import('./DatePickerElement'))

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

