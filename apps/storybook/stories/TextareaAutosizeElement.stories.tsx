import {FormContainer, TextareaAutosizeElement} from 'react-hook-form-mui'
import {Meta, StoryObj} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'

const meta = {
  title: 'Text Input/TextareaAutosizeElement',
  component: TextareaAutosizeElement,
  decorators: [FormWrap],
} satisfies Meta<typeof TextareaAutosizeElement>

export default meta
type Story = StoryObj<typeof meta>

function FormWrap(Story) {
  return (
    <FormContainer defaultValues={{}} onSuccess={action('submit')}>
      <Story />
      <br />
      <SubmitButton />
    </FormContainer>
  )
}

export const Basic: Story = {
  args: {
    label: 'Simple Textarea',
    name: 'textarea',
  },
}

export const Required: Story = {
  args: {
    label: 'Required Textarea',
    name: 'textarea-req',
    required: true,
  },
}

export const Rows: Story = {
  args: {
    label: 'Simple Textarea',
    name: 'textarea-rows',
    rows: 5,
  },
}

export const ResizeStyle: Story = {
  args: {
    label: 'Vertical Resize',
    name: 'textarea-vertical',
    resizeStyle: 'vertical',
    rows: 3,
  },
}
