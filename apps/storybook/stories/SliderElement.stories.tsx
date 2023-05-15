import {FormContainer, SliderElement} from 'react-hook-form-mui/src'
import {Meta, StoryFn} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'Slider Element',
  component: SliderElement,
} as Meta<typeof SliderElement>

const Template: StoryFn<typeof SliderElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <SliderElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

export const Basic = {
  render: Template,

  args: {
    name: 'slider',
  },
}

export const Label = {
  render: Template,

  args: {
    name: 'slider',
    label: 'Slider Label',
  },
}

export const Required = {
  render: Template,

  args: {
    name: 'slider_required',
    label: 'Required Label',
    required: true,
  },
}

export const WithOptions = {
  render: Template,

  args: {
    name: 'slider',
    label: 'Slider With Options',
    min: 0,
    max: 10,
    marks: true,
  },
}
