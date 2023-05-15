import {DatePickerElement, FormContainer} from 'react-hook-form-mui/src'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'
import {Meta, StoryFn} from '@storybook/react'

export default {
  title: 'DatePickerElement',
  component: DatePickerElement,
} as Meta<typeof DatePickerElement>

const Template: StoryFn<typeof DatePickerElement> = (args) => (
  <FormContainer
    defaultValues={{
      preset: '2023-02-01',
    }}
    onSuccess={action('submit')}
  >
    <DatePickerElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

export const Basic = {
  render: Template,

  args: {
    label: 'Date Picker',
    name: 'basic',
  },
}

export const Required = {
  render: Template,

  args: {
    label: 'Required Picker',
    name: 'required',
    required: true,
  },
}

export const RequiredCustomMessage = {
  render: Template,

  args: {
    label: 'Required Picker',
    name: 'requiredCustomMessage',
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

export const CustomiseInput = {
  render: Template,

  args: {
    label: 'Custom Style',
    name: 'custom',
    inputProps: {
      sx: {
        '& .MuiOutlinedInput-root': {
          borderColor: 'green',
        },
      },
    },
  },
}

export const PresetValue = {
  render: Template,

  args: {
    label: 'Custom Style',
    name: 'preset',
    inputProps: {
      sx: {
        '& .MuiOutlinedInput-root': {
          borderColor: 'green',
        },
      },
    },
  },
}
