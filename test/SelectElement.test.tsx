import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { FormContainer, SelectElement } from '../_unused'
// @ts-ignore
import MutationObserver from 'mutation-observer'

window.MutationObserver = window.MutationObserver || MutationObserver

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <FormContainer
      onSuccess={() => console.log('success')}
      defaultValues={{
        'default-select-element': '1',
      }}
    >
      <SelectElement
        fullWidth={true}
        label="The label"
        name="default-select-element"
        options={[
          { id: '1', title: 'Option 1' },
          { id: '2', title: 'Option 2' },
        ]}
      />
    </FormContainer>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
