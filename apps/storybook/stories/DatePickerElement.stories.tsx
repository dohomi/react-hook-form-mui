import {Meta, StoryObj} from '@storybook/react-vite'
import {FormContainerDecorator} from '../src/FormDecorator'
import {DatePickerElement} from 'react-hook-form-mui/date-pickers'

const meta = {
  title: 'Date & Time/DatePickerElement',
  component: DatePickerElement,
  decorators: [FormContainerDecorator],
} satisfies Meta<typeof DatePickerElement>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: 'Date Picker',
    name: 'basic',
  },
}

export const Clearable: Story = {
  args: {
    label: 'Date Picker',
    name: 'basic',
    slotProps: {
      actionBar: {
        actions: ['clear'],
      },
    },
  },
}

export const Required: Story = {
  args: {
    label: 'Required Picker',
    name: 'required',
    required: true,
  },
}

export const RequiredCustomMessage: Story = {
  args: {
    label: 'Required Picker',
    name: 'requiredCustomMessage',
    required: true,
    rules: {required: 'Custom required message'},
  },
}

export const WrongValidatedDate: Story = {
  args: {
    label: 'Datetime Picker',
    name: 'wrong_date',
  },
}

export const DisableTextInput: Story = {
  args: {
    label: 'Required Picker',
    name: 'requiredCustomMessage',
    required: true,
    textReadOnly: true,
  },
}

export const CustomiseInput: Story = {
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

export const PresetValue: Story = {
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

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    name: 'preset',
    disabled: true,
  },
}
