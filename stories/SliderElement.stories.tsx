import { FormContainer, SliderElement } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { SubmitButton } from '../src/Shared'

export default {
  title: 'Slider Element',
  component: SliderElement,
} as ComponentMeta<typeof SliderElement>

const Template: ComponentStory<typeof SliderElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <SliderElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

export const Basic = Template.bind({})
Basic.args = {
  name: 'slider',
}

export const Label = Template.bind({})
Label.args = {
  name: 'slider',
  label: 'Slider Label',
}

export const WithOptions = Template.bind({})
WithOptions.args = {
  name: 'slider',
  label: 'Slider With Options',
  min: 0,
  max: 10,
  marks: true,
}
