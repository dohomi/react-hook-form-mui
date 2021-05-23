import FormContainer from 'react-form-hook-mui/FormContainer'
import TextFieldElement from 'react-form-hook-mui/TextFieldElement'

import { Button } from '@material-ui/core'
import { useState } from 'react'

type FormProps = {
  hallo: string
}
export default function Index() {
  const [values, setValues] = useState<FormProps>()
  const onSubmit = (data: FormProps) => {
    setValues(data)
  }
  let defaultValues: FormProps = { hallo: '' }
  return (
    <div>
      <FormContainer defaultValues={defaultValues} onSuccess={onSubmit}>
        <TextFieldElement name={'hallo'} label={'Hallo'} required /><br />
        <TextFieldElement color={'primary'} name={'primary'} label={'Primary'} /><br />
        <TextFieldElement color={'secondary'} name={'secondary'} label={'Secondary'} />
        <br />
        <Button type={'submit'} variant={'contained'} color={'primary'}>Submit</Button>
      </FormContainer>
      <div>
        Data:<br />
        {JSON.stringify(values)}
      </div>
    </div>
  )
}

