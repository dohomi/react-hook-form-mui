import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { FormContainer, TextFieldElement } from 'react-form-hook-mui'

type FormProps = {
  hallo: string
}
const App = () => {
  const onSubmit = (values:FormProps) => {
    try {
      console.log(values)
    } catch (e) {

    }
  }
  let defaultValues: FormProps = { hallo: '' }
  return (
    <div>
      <FormContainer defaultValues={defaultValues} onSuccess={onSubmit}>
        <TextFieldElement name={'hallo'} label={'Hallo'} />
      </FormContainer>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
