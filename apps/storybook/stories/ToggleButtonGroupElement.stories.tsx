import {
  FormContainer,
  ToggleButtonGroupElement,
  ToggleButtonGroupElementProps,
} from 'react-hook-form-mui/src'
import {Meta, StoryFn} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'

export default {
  title: 'ToggleButtonGroupElement',
  component: ToggleButtonGroupElement,
} as Meta<typeof ToggleButtonGroupElement>

const Template: StoryFn<typeof ToggleButtonGroupElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <ToggleButtonGroupElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

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

export const Basic = {
  render: Template,

  args: {
    name: 'basic',
    options,
  },
}

export const Exclusive = {
  render: Template,

  args: {
    name: 'exclusive',
    options,
    exclusive: true,
  },
}

export const EnforceOne = {
  render: Template,

  args: {
    name: 'exclusive',
    options,
    exclusive: true,
    enforceAtLeastOneSelected: true,
  },
}

export const WithIcons = {
  render: Template,

  args: {
    name: 'exclusive',
    options: optionIcons,
  },
}

export const WithLabel = {
  render: Template,

  args: {
    name: 'exclusive',
    options: optionIcons,
    label: 'Please Select',
  },
}

export const WithLabelRequired = {
  render: Template,

  args: {
    name: 'exclusive',
    options: optionIcons,
    label: 'Please Select',
    required: true,
  },
}

export const WithCustomHelperText = {
  render: Template,

  args: {
    name: 'exclusive',
    options: optionIcons,
    label: 'Please Select',
    required: true,
    helperText: 'Some helper text',
  },
}
