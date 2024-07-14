import {FormContainer, SliderElement} from 'react-hook-form-mui'
import {Meta, StoryObj} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'

const meta = {
  title: 'Radio & Sliders & Switches/SliderElement',
  component: SliderElement,
  decorators: [FormWrap],
} satisfies Meta<typeof SliderElement>

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
    name: 'slider',
  },
}

export const Label: Story = {
  args: {
    name: 'slider',
    label: 'Slider Label',
  },
}

export const Required: Story = {
  args: {
    name: 'slider_required',
    label: 'Required Label',
    required: true,
  },
}

export const WithOptions: Story = {
  args: {
    name: 'slider',
    label: 'Slider With Options',
    min: 0,
    max: 10,
    marks: true,
  },
}
