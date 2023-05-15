import {action} from '@storybook/addon-actions'
import {CheckboxElement, FormContainer} from 'react-hook-form-mui/src'
import {Meta, StoryFn} from '@storybook/react'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'Checkbox',
  component: CheckboxElement,
} as Meta<typeof CheckboxElement>

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
