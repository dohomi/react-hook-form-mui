import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { FormContainer, TextFieldElement } from '../_unused'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import MutationObserver from 'mutation-observer'

window.MutationObserver = window.MutationObserver || MutationObserver

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <FormContainer onSuccess={() => console.log('success')} defaultValues={''}>
      <TextFieldElement label="The label" name={'default-text-field'} />
    </FormContainer>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
