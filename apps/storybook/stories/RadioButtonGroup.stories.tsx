import {RadioButtonGroup} from 'react-hook-form-mui'
import {Meta, StoryObj} from '@storybook/react'
import {FormContainerDecorator} from '../src/FormDecorator'

const meta = {
  title: 'RadioButtonGroup',
  component: RadioButtonGroup,
  decorators: [FormContainerDecorator],
} satisfies Meta<typeof RadioButtonGroup>
export default meta
type Story = StoryObj<typeof meta>

const options = [
  {id: '1', label: 'Label 1'},
  {id: '2', label: 'label 2'},
]

const withDisabledOptions = [
  ...options,
  {id: '3', label: 'label 3', disabled: true},
]

export const Basic: Story = {
  args: {
    label: 'Basic',
    name: 'basic',
    options,
  },
}

export const Inline: Story = {
  args: {
    label: 'Inline',
    name: 'inline',
    row: true,
    options,
  },
}

export const Required: Story = {
  args: {
    label: 'Required',
    name: 'inline',
    required: true,
    options,
  },
}

export const ValueAsNumber: Story = {
  args: {
    label: 'Required',
    name: 'number_value',
    required: true,
    type: 'number',
    options: options.map((i) => ({id: Number(i.id), label: i.label})),
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    name: 'disabled',
    options,
    disabled: true,
  },
}

export const IndividuallyDisabled: Story = {
  args: {
    label: 'Individually Disabled Options',
    name: 'individuallydisabled',
    options: withDisabledOptions,
  },
}
