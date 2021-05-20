import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { FormContainer, RadioButtonGroup } from 'index.ts'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <FormContainer
      onSuccess={() => {}}
      defaultValues={{ 'default-select-element': '1' }}
    >
      <RadioButtonGroup
        label="The label"
        name="default-select-element"
        options={[
          { id: '1', label: 'Option 1' },
          { id: '2', label: 'Option 2' },
        ]}
      />
    </FormContainer>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
