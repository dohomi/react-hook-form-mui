import {FormContainer, TextareaAutosizeElement} from 'react-hook-form-mui/src'
import {Meta, StoryFn} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'TextareaAutosizeElement',
  component: TextareaAutosizeElement,
} as Meta<typeof TextareaAutosizeElement>

const Template: StoryFn<typeof TextareaAutosizeElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <TextareaAutosizeElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

export const Basic = {
  render: Template,

  args: {
    label: 'Simple Textarea',
    name: 'textarea',
  },
}

export const Required = {
  render: Template,

  args: {
    label: 'Required Textarea',
    name: 'textarea-req',
    required: true,
  },
}

export const Rows = {
  render: Template,

  args: {
    label: 'Simple Textarea',
    name: 'textarea-rows',
    rows: 5,
  },
}

export const ResizeStyle = {
  render: Template,

  args: {
    label: 'Vertical Resize',
    name: 'textarea-vertical',
    resizeStyle: 'vertical',
    rows: 3,
  },
}
