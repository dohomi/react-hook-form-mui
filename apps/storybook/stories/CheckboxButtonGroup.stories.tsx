import {CheckboxButtonGroup} from 'react-hook-form-mui/src'
import {Meta, StoryObj} from '@storybook/react'
import {FormContainerDecorator} from '../src/FormDecorator'

const meta = {
  title: 'CheckboxButtonGroup',
  component: CheckboxButtonGroup,
  decorators: [FormContainerDecorator],
} satisfies Meta<typeof CheckboxButtonGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Label',
    name: 'basic-checkbox-button-group',
    options: [
      {id: '1', label: 'Label 1'},
      {id: '2', label: 'label 2'},
    ],
  },
}

export const Inline: Story = {
  args: {
    label: 'Inline',
    row: true,
    name: 'basic-checkbox-inline',
    options: [
      {id: '1', label: 'Label 1'},
      {id: '2', label: 'label 2'},
    ],
  },
}

export const ReturnObject: Story = {
  args: {
    label: 'Object',
    returnObject: true,
    name: 'basic-checkbox-object',
    options: [
      {id: '1', label: 'Label 1'},
      {id: '2', label: 'label 2'},
    ],
  },
}

export const Required: Story = {
  args: {
    label: 'Required',
    required: true,
    name: 'basic-checkbox-required',
    options: [
      {id: '1', label: 'Label 1'},
      {id: '2', label: 'label 2'},
    ],
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    name: 'basic-checkbox-disabled',
    options: [
      {id: '1', label: 'Label 1'},
      {id: '2', label: 'label 2'},
    ],
  },
}
