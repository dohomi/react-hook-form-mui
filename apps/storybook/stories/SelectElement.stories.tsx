import {SelectElement} from 'react-hook-form-mui/src'
import {Meta, StoryObj} from '@storybook/react'
import {FormContainerDecorator} from '../src/FormDecorator'

const meta = {
  title: 'SelectElement',
  component: SelectElement,
  decorators: [FormContainerDecorator],
} satisfies Meta<typeof SelectElement>
export default meta
type Story = StoryObj<typeof meta>
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

const options = [
  {id: '1', label: 'Label 1'},
  {id: '2', label: 'label 2'},
]

const withDisabledOptions = [
  ...options,
  {id: '3', label: 'label 2', disabled: true},
]

export const Basic: Story = {
  args: {
    name: 'basic',
    label: 'Basic',
    options,
  },
}

export const Required: Story = {
  args: {
    name: 'required',
    label: 'Required',
    required: true,
    options,
  },
}
export const WithDisabledOption: Story = {
  args: {
    name: 'disabled',
    required: true,
    options: withDisabledOptions,
  },
}

export const MonthPicker: Story = {
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
