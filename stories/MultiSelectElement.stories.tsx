import {FormContainer, MultiSelectElement} from '../src'
import {action} from '@storybook/addon-actions'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {SubmitButton} from '../src/Shared'


export default {
  title: 'MultiSelectElement',
  component: MultiSelectElement
} as ComponentMeta<typeof MultiSelectElement>

const Template: ComponentStory<typeof MultiSelectElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <MultiSelectElement {...args} />
    <br/>
    <SubmitButton/>
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
  'Kelly Snyder'
]

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const Basic = Template.bind({})
Basic.args = {
  name: 'basic',
  options: names
}

export const Filled = Template.bind({})
Filled.args = {
  name: 'filled',
  options: names,
  variant: 'filled'
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  name: 'basic',
  label: 'Select Field',
  options: names
}

export const Required = Template.bind({})
Required.args = {
  name: 'required',
  label: 'Required Field',
  options: names,
  required: true
}

export const WithChips = Template.bind({})
WithChips.args = {
  name: 'chips',
  label: 'Required Field',
  options: names,
  showChips: true
}

export const WithCheckbox = Template.bind({})
WithCheckbox.args = {
  name: 'checkbox',
  label: 'Checkbox Field',
  options: names,
  showCheckbox: true
}

const objectVals = [
  {id: 1, name: 'Alpha'},
  {id: 2, name: 'Beta'},
  {id: 3, name: 'Celsius'},
  {id: 4, name: 'Delta'}
]
export const WithObjectArray = Template.bind({})
WithObjectArray.args = {
  name: 'object',
  label: 'Object Field',
  options: objectVals,
  itemKey: 'id',
  itemLabel: 'name'
}

export const OverwriteRenderValue = Template.bind({})
OverwriteRenderValue.args = {
  name: 'object',
  label: 'Object Field',
  options: objectVals,
  itemKey: 'id',
  itemLabel: 'name',
  renderValue: (selected: any) => `You selected: ${(selected || [])?.length}`
}

export const MonthPicker = Template.bind({})
MonthPicker.args = {
  name: 'month',
  options: months,
  MenuProps: {
    PaperProps: {
      sx: {
        '& .MuiList-root': {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '4px'
        }
      }
    }
  }
}