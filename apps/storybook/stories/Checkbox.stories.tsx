import {action} from '@storybook/addon-actions'
import {FormContainer} from 'react-hook-form-mui/src'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {SubmitButton} from '../src/Shared'
import {CheckboxElement} from 'react-hook-form-mui'

export default {
  title: 'Checkbox',
  component: CheckboxElement,
} as ComponentMeta<typeof CheckboxElement>

const Template: ComponentStory<typeof CheckboxElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <CheckboxElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

export const Basic = Template.bind({})
Basic.args = {
  label: 'Label',
  name: 'basic',
}

export const LabelPosition = Template.bind({})
LabelPosition.args = {
  label: 'Label',
  name: 'basic',
  labelProps: {
    labelPlacement: 'top',
  },
}
