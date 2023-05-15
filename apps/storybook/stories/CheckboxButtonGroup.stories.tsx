import {action} from '@storybook/addon-actions'
import {CheckboxButtonGroup, FormContainer} from 'react-hook-form-mui/src'
import {Meta, StoryFn} from '@storybook/react'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'CheckboxButtonGroup',
  component: CheckboxButtonGroup,
} as Meta<typeof CheckboxButtonGroup>

const Template: StoryFn<typeof CheckboxButtonGroup> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <CheckboxButtonGroup {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

export const Basic = {
  render: Template,

  args: {
    label: 'Label',
    name: 'basic-checkbox-button-group',
    options: [
      {id: '1', label: 'Label 1'},
      {id: '2', label: 'label 2'},
    ],
  },
}

export const Inline = {
  render: Template,

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

export const ReturnObject = {
  render: Template,

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

export const Required = {
  render: Template,

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

export const Disabled = {
  render: Template,

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
