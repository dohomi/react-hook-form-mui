import {FormContainer, TextareaAutosizeElement} from 'react-hook-form-mui/src'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'TextareaAutosizeElement',
  component: TextareaAutosizeElement,
} as ComponentMeta<typeof TextareaAutosizeElement>

const Template: ComponentStory<typeof TextareaAutosizeElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <TextareaAutosizeElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

export const Basic = Template.bind({})
Basic.args = {
  label: 'Simple Textarea',
  name: 'textarea',
}

export const Required = Template.bind({})
Required.args = {
  label: 'Required Textarea',
  name: 'textarea-req',
  required: true,
}

export const Rows = Template.bind({})
Rows.args = {
  label: 'Simple Textarea',
  name: 'textarea-rows',
  rows: 5,
}

export const ResizeStyle = Template.bind({})
ResizeStyle.args = {
  label: 'Vertical Resize',
  name: 'textarea-vertical',
  resizeStyle: 'vertical',
  rows: 3,
}
