import {DateTimePickerElement, FormContainer} from 'react-hook-form-mui/src'
import {Meta, StoryFn} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'DateTimePickerElement',
  component: DateTimePickerElement,
} as Meta<typeof DateTimePickerElement>

const Template: StoryFn<typeof DateTimePickerElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <DateTimePickerElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

export const Basic = {
  render: Template,

  args: {
    label: 'Datetime Picker',
    name: 'basic',
  },
}

export const RequiredPicker = {
  render: Template,

  args: {
    label: 'Datetime Picker',
    name: 'required_picker',
    required: true,
  },
}

export const RequiredPickerCustom = {
  render: Template,

  args: {
    label: 'Datetime Picker',
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
