import {FormContainer, SwitchElement} from 'react-hook-form-mui/src'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'Switch Element',
  component: SwitchElement,
} as ComponentMeta<typeof SwitchElement>

const Template: ComponentStory<typeof SwitchElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <SwitchElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

export const Basic = Template.bind({})
Basic.args = {
  name: 'switch',
  label: 'Switch Label',
}

export const LabelPosition = Template.bind({})
LabelPosition.args = {
  name: 'switch',
  label: 'Switch Label',
  labelPlacement: 'start',
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'switch',
  label: 'Disabled Switch',
  disabled: true,
}
