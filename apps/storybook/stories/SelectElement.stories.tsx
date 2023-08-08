import {FormContainer, SelectElement} from 'react-hook-form-mui/src'
import {action} from '@storybook/addon-actions'
import {Meta, StoryFn} from '@storybook/react'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'SelectElement',
  component: SelectElement,
} as Meta<typeof SelectElement>

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
].map((i) => ({
  id: i,
  label: i,
}))

const Template: StoryFn<typeof SelectElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <SelectElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

const options = [
  {id: '1', label: 'Label 1'},
  {id: '2', label: 'label 2'},
]

const withDisabledOptions = [
  ...options,
  {id: '3', label: 'label 2', disabled: true},
]

export const Basic = {
  render: Template,

  args: {
    name: 'basic',
    label: 'Basic',
    options,
  },
}

export const Required = {
  render: Template,

  args: {
    name: 'required',
    label: 'Required',
    required: true,
    options,
  },
}
export const WithDisabledOption = {
  render: Template,

  args: {
    name: 'disabled',
    required: true,
    options: withDisabledOptions,
  },
}

export const MonthPicker = {
  render: Template,

  args: {
    name: 'month',
    options: months,
    label: 'Pick a month',
    sx: {
      minWidth: '150px',
    },
    SelectProps: {
      MenuProps: {
        PaperProps: {
          sx: {
            '& .MuiList-root': {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '4px',
            },
          },
        },
      },
    },
  },
}
