import {action} from '@storybook/addon-actions'
import {CheckboxElement, FormContainer} from 'react-hook-form-mui/src'
import {Meta, StoryFn} from '@storybook/react'
import {SubmitButton} from '../src/Shared'

const meta = {
  title: 'Checkbox',
  component: CheckboxElement,
} satisfies Meta<typeof CheckboxElement>

export default meta

const Template: StoryFn<typeof CheckboxElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <CheckboxElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

export const Basic = {
  render: Template,

  args: {
    label: 'Label',
    name: 'basic',
  },
}

export const Required = {
  render: Template,

  args: {
    label: 'Label',
    name: 'basic',
    required: true,
  },
}

export const LabelPosition = {
  render: Template,

  args: {
    label: 'Label',
    name: 'basic',
    labelProps: {
      labelPlacement: 'top',
    },
  },
}
