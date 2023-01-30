import {FormContainer, RadioButtonGroup} from 'react-hook-form-mui/src'
import {action} from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'RadioButtonGroup',
  component: RadioButtonGroup,
} as ComponentMeta<typeof RadioButtonGroup>

const Template: ComponentStory<typeof RadioButtonGroup> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <RadioButtonGroup {...args} />
    <br/>
    <SubmitButton/>
  </FormContainer>
)
const options = [
  {id: '1', label: 'Label 1'},
  {id: '2', label: 'label 2'},
]

export const Basic = Template.bind({})
Basic.args = {
  label: 'Basic',
  name: 'basic',
  options,
}

export const Inline = Template.bind({})
Inline.args = {
  label: 'Inline',
  name: 'inline',
  row: true,
  options,
}

export const Required = Template.bind({})
Required.args = {
  label: 'Required',
  name: 'inline',
  required: true,
  options,
}

export const ValueAsNumber = Template.bind({})
ValueAsNumber.args = {
  label: 'Required',
  name: 'number_value',
  required: true,
  type: 'number',
  options: options.map(i => ({id: Number(i.id), label: i.label})),
}

