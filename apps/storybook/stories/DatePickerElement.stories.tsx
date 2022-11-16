import {DatePickerElement, FormContainer} from 'react-hook-form-mui/src'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'
import {ComponentMeta, ComponentStory} from '@storybook/react'

export default {
  title: 'DatePickerElement',
  component: DatePickerElement
} as ComponentMeta<typeof DatePickerElement>


const Template: ComponentStory<typeof DatePickerElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <DatePickerElement {...args} />
    <br/>
    <SubmitButton/>
  </FormContainer>
)


export const Basic = Template.bind({})
Basic.args = {
  label: 'Date Picker',
  name: 'basic'
}

export const Required = Template.bind({})
Required.args = {
  label: 'Required Picker',
  name: 'required',
  required: true
}

export const RequiredCustomMessage = Template.bind({})
RequiredCustomMessage.args = {
  label: 'Required Picker',
  name: 'requiredCustomMessage',
  required: true,
  validation: {required: 'Custom required message'}
}
