import { lazy } from 'react'

const TextFieldElement = lazy(() => import('./TextFieldElement'))
const FormContainer = lazy(() => import('./FormContainer'))
const RadioButtonGroup = lazy(() => import('./RadioButtonGroup'))
const CheckboxButtonGroup = lazy(() => import('./CheckboxButtonGroup'))
const CheckboxElement = lazy(() => import('./CheckboxElement'))
const PasswordElement = lazy(() => import('./PasswordElement'))
const SelectElement = lazy(() => import('./SelectElement'))
const MultiSelectElement = lazy(() => import('./MultiSelectElement'))
const DatePickerElement = lazy(() => import('./DatePickerElement'))

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

export {
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

