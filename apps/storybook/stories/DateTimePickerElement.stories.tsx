import {DateTimePickerElement} from 'react-hook-form-mui/date-pickers'
import {Meta, StoryObj} from '@storybook/react-vite'
import {FormContainerDecorator} from '../src/FormDecorator'

const meta = {
  title: 'Date & Time/DateTimePickerElement',
  component: DateTimePickerElement,
  decorators: [FormContainerDecorator],
} satisfies Meta<typeof DateTimePickerElement>
export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Datetime Picker',
    name: 'datetime',
  },
}

export const RequiredPicker: Story = {
  args: {
    label: 'Datetime Picker',
    name: 'required_picker',
    required: true,
  },
}

export const RequiredPickerCustom: Story = {
  args: {
    label: 'Datetime Picker',
    name: 'required_picker_custom',
    required: true,
    rules: {required: 'Custom required message'},
  },
}

export const DisableTextInput: Story = {
  args: {
    label: 'Required Picker',
    name: 'requiredCustomMessage',
    required: true,
    textReadOnly: true,
  },
}
