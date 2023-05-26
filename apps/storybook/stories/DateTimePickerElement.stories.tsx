import {DateTimePickerElement} from 'react-hook-form-mui/src'
import {Meta, StoryObj} from '@storybook/react'
import {FormContainerDecorator} from '../src/FormDecorator'

const meta = {
  title: 'DateTimePickerElement',
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
    validation: {required: 'Custom required message'},
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
