import { TimePickerElement, FormContainer } from 'react-hook-form-mui/src'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import DateFnsProvider from '../src/DateFnsProvider'
import { action } from '@storybook/addon-actions'
import { SubmitButton } from '../src/Shared'

export default {
  title: 'TimePickerElement',
  component: TimePickerElement,
} as ComponentMeta<typeof TimePickerElement>

const Template: ComponentStory<typeof TimePickerElement> = (args) => (
  <DateFnsProvider>
    <FormContainer defaultValues={{}} onSuccess={action('submit')}>
      <TimePickerElement {...args} />
      <br />
      <SubmitButton />
    </FormContainer>
  </DateFnsProvider>
)

export const Basic = Template.bind({})
Basic.args = {
  label: 'Time Picker',
  name: 'basic',
}

export const RequiredPicker = Template.bind({})
RequiredPicker.args = {
  label: 'Time Picker',
  name: 'required_picker',
  required: true,
}

export const RequiredPickerCustom = Template.bind({})
RequiredPickerCustom.args = {
  label: 'Time Picker',
  name: 'required_picker_custom',
  required: true,
  validation: { required: 'Custom required message' },
}
