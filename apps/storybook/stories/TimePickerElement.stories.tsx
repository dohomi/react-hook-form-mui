import {TimePickerElement} from 'react-hook-form-mui/date-pickers'
import {Meta, StoryObj} from '@storybook/react-vite'
import {FormContainerDecorator} from '../src/FormDecorator'

const meta = {
  title: 'Date & Time/TimePickerElement',
  component: TimePickerElement,
  decorators: [FormContainerDecorator],
} satisfies Meta<typeof TimePickerElement>

export default meta

type Story = StoryObj<typeof meta>

export const RequiredPicker: Story = {
  args: {
    label: 'Time Picker',
    name: 'required_picker',
    required: true,
  },
}

export const RequiredPickerCustom: Story = {
  args: {
    label: 'Time Picker',
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
