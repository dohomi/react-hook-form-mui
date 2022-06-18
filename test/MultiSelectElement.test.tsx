import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MultiSelectElement, FormContainer } from '../src'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <FormContainer onSuccess={() => {}} defaultValues={{}}>
      <MultiSelectElement
        name="multi-select-element"
        menuItems={['1', '2', '3']}
      />
    </FormContainer>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
