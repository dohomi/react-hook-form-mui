import { FormContainer, SelectElement } from '../src'
import { action } from '@storybook/addon-actions'
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SubmitButton } from '../src/Shared'

export default {
  title: 'SelectElement',
  component: SelectElement
} as ComponentMeta<typeof SelectElement>

const Template: ComponentStory<typeof SelectElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <SelectElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

const options = [{ id: '1', title: 'Label 1' }, { id: '2', title: 'label 2' }]

export const Basic = Template.bind({})
Basic.args = {
  name: 'basic',
  label: 'Basic',
  options
}

export const Required = Template.bind({})
Required.args = {
  name: 'required',
  label: 'Required',
  required: true,
  options
}

/*
export const Basic = () => {
  return (
    <FormContainer defaultValues={{
      'default-select-element': '',
      'pre-select-element': '1'
    }} onSuccess={action('submit')}>
      <SelectElement
        value="Basic Select"
        required
        parseError={() => {
          return 'This field is required'
        }}
        label={text('label', 'The label')}
        name="default-select-element"
        options={object('Options', [{ id: '1', title: 'Label 1' }, { id: '2', title: 'label 2' }])}
        onChange={action('change')}
      /><br />
      <SelectElement
        value="Basic Select"
        required
        parseError={() => {
          return 'This field is required'
        }}
        label={text('label', 'The label')}
        name="pre-select-element"
        options={object('Options', [{ id: '1', title: 'Label 1' }, { id: '2', title: 'label 2' }])}
        onChange={action('change')}
        objectOnChange
      /><br />
      <Button type={'submit'} color={'primary'}>Submit</Button>
    </FormContainer>
  )
}
*/
