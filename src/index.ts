import universal from 'react-universal-component'
import { TextFieldElementProps } from './TextFieldElement'
import { DatePickerElementProps } from './DatePickerElement'
import { MultiSelectElementProps } from './MultiSelectElement'
import { SelectElementProps } from './SelectElement'
import { PasswordElementProps } from './PasswordElement'
import { CheckboxElementProps } from './CheckboxElement'
import { CheckboxButtonGroupProps } from './CheckboxButtonGroup'
import { RadioButtonGroupProps } from './RadioButtonGroup'
import { FormContainerProps } from './FormContainer'

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
  TextFieldElementProps,
  FormContainerProps,
  RadioButtonGroupProps,
  CheckboxButtonGroupProps,
  CheckboxElementProps,
  PasswordElementProps,
  SelectElementProps,
  MultiSelectElementProps,
  DatePickerElementProps
}
