import {FormContainer, MultiSelectElement} from 'react-hook-form-mui/src'
import {action} from '@storybook/addon-actions'
import {Meta, StoryFn} from '@storybook/react'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'MultiSelectElement',
  component: MultiSelectElement,
} as Meta<typeof MultiSelectElement>

const Template: StoryFn<typeof MultiSelectElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <MultiSelectElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

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

export const Basic = {
  render: Template,

  args: {
    name: 'basic',
    options: names,
  },
}

export const Filled = {
  render: Template,

  args: {
    name: 'filled',
    options: names,
    variant: 'filled',
  },
}

export const WithLabel = {
  render: Template,

  args: {
    name: 'basic',
    label: 'Select Field',
    options: names,
  },
}

export const WithLabelSmall = {
  render: Template,

  args: {
    name: 'basic_small',
    size: 'small',
    label: 'Select Field',
    options: names,
  },
}

export const Required = {
  render: Template,

  args: {
    name: 'required',
    label: 'Required Field',
    options: names,
    required: true,
  },
}

export const WithChips = {
  render: Template,

  args: {
    name: 'chips',
    label: 'Required Field',
    options: names,
    showChips: true,
  },
}

export const WithChipsPreserveOrder = {
  render: Template,

  args: {
    name: 'chips',
    label: 'Required Field',
    options: names,
    showChips: true,
    preserveOrder: true,
  },
}

export const WithCheckbox = {
  render: Template,

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

export const WithObjectArray = {
  render: Template,

  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name',
  },
}

export const WithObjectArrayChips = {
  render: Template,

  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name',
    showChips: true,
  },
}

export const OverwriteRenderValue = {
  render: Template,

  args: {
    name: 'object',
    label: 'Object Field',
    options: objectVals,
    itemKey: 'id',
    itemLabel: 'name',
    renderValue: (selected: any) => `You selected: ${(selected || [])?.length}`,
  },
}

export const MonthPicker = {
  render: Template,

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

export const MonthPickerSmall = {
  render: Template,

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
