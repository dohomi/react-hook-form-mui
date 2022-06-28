import { AutocompleteElement, FormContainer } from '../src'
import { FC, PropsWithChildren } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Box, Button } from '@mui/material'

export default {
  title: 'Autocomplete',
  component: AutocompleteElement
} as ComponentMeta<typeof AutocompleteElement>

const FormWrap: FC<PropsWithChildren> = ({ children }) => (
  <FormContainer onSuccess={action('form-submit')}
                 defaultValues={{ preselect: 2, 'multi-preselect': [2] }}>
    {children}
    <Box marginTop={2}>
      <Button type={'submit'}>Submit</Button>
    </Box>
  </FormContainer>
)

const Template: ComponentStory<typeof AutocompleteElement> = (args) => {
  return (
    <FormWrap>
      <AutocompleteElement {...args} />
    </FormWrap>
  )
}

const options = [{ label: 'First', id: 1 }, { label: 'Second', id: 2 }, { label: 'Third', id: 3 }, {
  label: 'Four',
  id: 4
}]

export const Basic = Template.bind({})

Basic.args = {
  name: 'basic',
  options
}

export const BasicPreSelect = Template.bind({})
BasicPreSelect.args = {
  name: 'preselect',
  options
}

export const MultiSelect = Template.bind({})
MultiSelect.args = {
  name: 'multi',
  options,
  multiple: true
}

export const MultiSelectRequired = Template.bind({})
MultiSelectRequired.args = {
  label: 'Multiple Required',
  name: 'multi-required',
  options,
  multiple: true,
  required: true
}

export const MultiSelectRequiredCustom = Template.bind({})
MultiSelectRequiredCustom.args = {
  label: 'Multiple Required Custom',
  name: 'multi-required-custom',
  options,
  multiple: true,
  rules: {
    required: 'Please fill out.'
  }
}

export const MultiSelectPredefined = Template.bind({})
MultiSelectPredefined.args = {
  name: 'multi-preselect',
  options,
  multiple: true
}

export const MultiSelectCheckbox = Template.bind({})
MultiSelectCheckbox.args = {
  name: 'multicheck',
  options,
  multiple: true,
  showCheckbox: true
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'Loading State',
  name: 'loading',
  options: [],
  multiple: true,
  showCheckbox: true,
  loading: true
}
