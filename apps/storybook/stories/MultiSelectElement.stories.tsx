import {MultiSelectElement} from 'react-hook-form-mui/src'
import {Meta, StoryObj} from '@storybook/react'
import {FormContainerDecorator} from '../src/FormDecorator'

const meta = {
  title: 'MultiSelectElement',
  component: MultiSelectElement,
  decorators: [FormContainerDecorator],
} satisfies Meta<typeof MultiSelectElement>
export default meta
type Story = StoryObj<typeof meta>

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
]

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
]

export const Basic: Story = {
  args: {
    name: 'basic',
    options: names,
  },
}

export const Filled: Story = {
  args: {
    name: 'filled',
    options: names,
    variant: 'filled',
  },
}

export const WithLabel: Story = {
  args: {
    name: 'basic',
    label: 'Select Field',
    options: names,
  },
}

export const WithLabelSmall: Story = {
  args: {
    name: 'basic_small',
    size: 'small',
    label: 'Select Field',
    options: names,
  },
}

export const Required: Story = {
  args: {
    name: 'required',
    label: 'Required Field',
    options: names,
    required: true,
  },
}

export const WithChips: Story = {
  args: {
    name: 'chips',
    label: 'Required Field',
    options: names,
    showChips: true,
  },
}

export const WithChipsPreserveOrder: Story = {
  args: {
    name: 'chips',
    label: 'Required Field',
    options: names,
    showChips: true,
    preserveOrder: true,
  },
}

export const WithCheckbox: Story = {
  args: {
    name: 'checkbox',
    label: 'Checkbox Field',
    options: names,
    showCheckbox: true,
  },
}

const objectVals = [
  {id: 1, name: 'Alpha'},
  {id: 2, name: 'Beta'},
  {id: 3, name: 'Celsius'},
  {id: 4, name: 'Delta'},
]

export const WithObjectArray: Story = {
  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name',
  },
}

export const WithObjectArrayChips: Story = {
  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name',
    showChips: true,
  },
}

export const OverwriteRenderValue: Story = {
  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name',
    renderValue: (selected: any) => `You selected: ${(selected || [])?.length}`,
  },
}

export const MonthPicker: Story = {
  args: {
    name: 'month',
    options: months,
    label: 'Months',
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
}

export const MonthPickerSmall: Story = {
  args: {
    name: 'months_small',
    options: months,
    label: 'Months',
    size: 'small',
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
}
