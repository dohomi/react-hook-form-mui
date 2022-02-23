import { FormContainer, SwitchElement } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { SubmitButton } from '../src/Shared'
import React from 'react'

export default {
  title: 'Switch Element',
  component: SwitchElement
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
  label: 'Switch Label'
}

export const LabelPosition = Template.bind({})
LabelPosition.args = {
  name: 'switch',
  label: 'Switch Label',
  labelPlacement: 'start'
}
