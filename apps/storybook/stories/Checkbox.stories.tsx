import {CheckboxElement} from 'react-hook-form-mui/src'
import {Meta, StoryObj} from '@storybook/react'
import {FormContainerDecorator} from '../src/FormDecorator'

const meta = {
  title: 'Checkbox',
  component: CheckboxElement,
  decorators: [FormContainerDecorator],
} satisfies Meta<typeof CheckboxElement>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Label',
    name: 'basic',
  },
}

export const Required: Story = {
  args: {
    label: 'Label',
    name: 'basic',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    name: 'basic',
    disabled: true,
  },
}

export const LabelPosition: Story = {
  args: {
    label: 'Label',
    name: 'basic',
    labelProps: {
      labelPlacement: 'top',
    },
  },
}
