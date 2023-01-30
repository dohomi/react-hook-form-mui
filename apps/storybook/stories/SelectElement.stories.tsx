import {FormContainer, SelectElement} from 'react-hook-form-mui/src'
import {action} from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'SelectElement',
  component: SelectElement,
} as ComponentMeta<typeof SelectElement>

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

const Template: ComponentStory<typeof SelectElement> = (args) => (
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

export const Basic = Template.bind({})
Basic.args = {
  name: 'basic',
  label: 'Basic',
  options,
}

export const Required = Template.bind({})
Required.args = {
  name: 'required',
  label: 'Required',
  required: true,
  options,
}

export const MonthPicker = Template.bind({})
MonthPicker.args = {
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
}
