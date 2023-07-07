import {
  FormContainer,
  ToggleButtonGroupElement,
  ToggleButtonGroupElementProps,
} from 'react-hook-form-mui/src'
import {Meta, StoryObj} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'

const meta = {
  title: 'ToggleButtonGroupElement',
  component: ToggleButtonGroupElement,
  decorators: [Decorator],
} satisfies Meta<typeof ToggleButtonGroupElement>

export default meta

type Story = StoryObj<typeof meta>

function Decorator(Story) {
  return (
    <FormContainer defaultValues={{}} onSuccess={action('submit')}>
      <Story />
      <br />
      <SubmitButton />
    </FormContainer>
  )
}

const options: ToggleButtonGroupElementProps<any>['options'] = [
  {
    id: 'first',
    label: 'First',
  },
  {
    id: 'second',
    label: 'Second',
  },
  {
    id: 'third',
    label: 'Third',
  },
]

const optionIcons: ToggleButtonGroupElementProps<any>['options'] = [
  {
    id: 'left',
    label: <FormatAlignLeftIcon />,
  },
  {
    id: 'center',
    label: <FormatAlignCenterIcon />,
  },
  {
    id: 'right',
    label: <FormatAlignRightIcon />,
  },
  {
    id: 'justify',
    label: <FormatAlignJustifyIcon />,
  },
]

export const Basic: Story = {
  args: {
    name: 'basic',
    options,
  },
}

export const Exclusive: Story = {
  args: {
    name: 'exclusive',
    options,
    exclusive: true,
  },
}

export const EnforceOne: Story = {
  args: {
    name: 'exclusive',
    options,
    exclusive: true,
    enforceAtLeastOneSelected: true,
  },
}

export const WithIcons: Story = {
  args: {
    name: 'exclusive',
    options: optionIcons,
  },
}

export const WithLabel: Story = {
  args: {
    name: 'exclusive',
    options: optionIcons,
    label: 'Please Select',
  },
}

export const WithLabelRequired: Story = {
  args: {
    name: 'exclusive',
    options: optionIcons,
    label: 'Please Select',
    required: true,
  },
}

export const WithCustomHelperText: Story = {
  args: {
    name: 'exclusive',
    options: optionIcons,
    label: 'Please Select',
    required: true,
    helperText: 'Some helper text',
  },
}

export const FullWidth: Story = {
  args: {
    options: options,
    name: 'fullWidth',
    label: 'Full Width',
    fullWidth: true,
  },
}
