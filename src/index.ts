import universal from 'react-universal-component'

const TextFieldElement = universal(() => import('./TextFieldElement'))
const FormContainer = universal(() => import('./FormContainer'))
const RadioButtonGroup = universal(() => import('./RadioButtonGroup'))
const CheckboxButtonGroup = universal(() => import('./CheckboxButtonGroup'))
const CheckboxElement = universal(() => import('./CheckboxElement'))
const PasswordElement = universal(() => import('./PasswordElement'))
const SelectElement = universal(() => import('./SelectElement'))
const MultiSelectElement = universal(() => import('./MultiSelectElement'))
const DatePickerElement = universal(() => import('./DatePickerElement'))

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

