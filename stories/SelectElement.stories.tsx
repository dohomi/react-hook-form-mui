import { FormContainer, SelectElement } from '../src'
import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SubmitButton } from '../src/Shared'

export default {
  title: 'SelectElement',
  component: SelectElement
} as ComponentMeta<typeof SelectElement>

const Template: ComponentStory<typeof SelectElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <SelectElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

const options = [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }]

export const Basic = Template.bind({})
Basic.args = {
  name: 'basic',
  label: 'Basic',
  options
}

export const Required = Template.bind({})
Required.args = {
  name: 'required',
  label: 'Required',
  required: true,
  options
}
