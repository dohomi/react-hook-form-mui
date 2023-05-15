import {FormContainer, RadioButtonGroup} from 'react-hook-form-mui/src'
import {action} from '@storybook/addon-actions'
import {Meta, StoryFn} from '@storybook/react'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'RadioButtonGroup',
  component: RadioButtonGroup,
} as Meta<typeof RadioButtonGroup>

const Template: StoryFn<typeof RadioButtonGroup> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <RadioButtonGroup {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)
const options = [
  {id: '1', label: 'Label 1'},
  {id: '2', label: 'label 2'},
]

export const Basic = {
  render: Template,

  args: {
    label: 'Basic',
    name: 'basic',
    options,
  },
}

export const Inline = {
  render: Template,

  args: {
    label: 'Inline',
    name: 'inline',
    row: true,
    options,
  },
}

export const Required = {
  render: Template,

  args: {
    label: 'Required',
    name: 'inline',
    required: true,
    options,
  },
}

export const ValueAsNumber = {
  render: Template,

  args: {
    label: 'Required',
    name: 'number_value',
    required: true,
    type: 'number',
    options: options.map((i) => ({id: Number(i.id), label: i.label})),
  },
}

export const Disabled = {
  render: Template,

  args: {
    label: 'Disabled',
    name: 'disabled',
    options,
    disabled: true,
  },
}
