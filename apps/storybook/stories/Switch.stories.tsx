import {FormContainer, SwitchElement} from 'react-hook-form-mui/src'
import {Meta, StoryFn} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'Switch Element',
  component: SwitchElement,
} as Meta<typeof SwitchElement>

const Template: StoryFn<typeof SwitchElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <SwitchElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

export const Basic = {
  render: Template,

  args: {
    name: 'switch',
    label: 'Switch Label',
  },
}

export const LabelPosition = {
  render: Template,

  args: {
    name: 'switch',
    label: 'Switch Label',
    labelPlacement: 'start',
  },
}

export const Disabled = {
  render: Template,

  args: {
    name: 'switch',
    label: 'Disabled Switch',
    disabled: true,
  },
}
