import {FormContainer, SwitchElement} from 'react-hook-form-mui'
import {Meta, StoryObj} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {SubmitButton} from '../src/Shared'

const meta = {
  title: 'Radio & Sliders & Switches/SwitchElement',
  component: SwitchElement,
  decorators: [FormWrap],
} satisfies Meta<typeof SwitchElement>

export default meta
type Story = StoryObj<typeof meta>

function FormWrap(Story) {
  return (
    <FormContainer defaultValues={{}} onSuccess={action('submit')}>
      <Story />
      <br />
      <SubmitButton />
    </FormContainer>
  )
}

export const Basic: Story = {
  args: {
    name: 'switch',
    label: 'Switch Label',
  },
}

export const LabelPosition: Story = {
  args: {
    name: 'switch',
    label: 'Switch Label',
    labelPlacement: 'start',
  },
}

export const Disabled: Story = {
  args: {
    name: 'switch',
    label: 'Disabled Switch',
    disabled: true,
  },
}
