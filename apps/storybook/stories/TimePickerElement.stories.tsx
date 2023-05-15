import {FormContainer, TimePickerElement} from 'react-hook-form-mui/src'
import {Meta, StoryFn} from '@storybook/react'
import DateFnsProvider from '../../../packages/rhf-mui/src/DateFnsProvider'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'TimePickerElement',
  component: TimePickerElement,
} as Meta<typeof TimePickerElement>

const Template: StoryFn<typeof TimePickerElement> = (args) => (
  <DateFnsProvider>
    <FormContainer defaultValues={{}} onSuccess={action('submit')}>
      <TimePickerElement {...args} />
      <br />
      <SubmitButton />
    </FormContainer>
  </DateFnsProvider>
)

export const Basic = {
  render: Template,

  args: {
    label: 'Time Picker',
    name: 'basic',
  },
}

export const RequiredPicker = {
  render: Template,

  args: {
    label: 'Time Picker',
    name: 'required_picker',
    required: true,
  },
}

export const RequiredPickerCustom = {
  render: Template,

  args: {
    label: 'Time Picker',
    name: 'required_picker_custom',
    required: true,
    validation: {required: 'Custom required message'},
  },
}

export const DisableTextInput = {
  render: Template,

  args: {
    label: 'Required Picker',
    name: 'requiredCustomMessage',
    required: true,
    textReadOnly: true,
  },
}
