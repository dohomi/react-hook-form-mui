import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
// @ts-ignore
// import { FormContainer, TextFieldElement } from 'react-form-hook-mui'
import { TextField } from 'mui-rff'

const App = () => {
  return (
    <div>
      <TextField name={'test'} />
      {/*<FormContainer defaultValues={{}} onSuccess={(values) => {*/}
      {/*  console.log(values)*/}
      {/*}}>*/}
      {/*  <TextFieldElement name={'hallo'} label={'Hallo'} />*/}

      {/*</FormContainer>*/}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
