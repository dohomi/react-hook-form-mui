import {FormContainer, TextFieldElement} from 'react-hook-form-mui'
import {Button, Stack} from '@mui/material'
import {useState} from 'react'

type FormProps = {
  hallo: string
}
export default function Index() {
  const [values, setValues] = useState<FormProps>()
  const onSubmit = (data: FormProps) => {
    setValues(data)
  }
  const defaultValues: FormProps = {hallo: ''}
  return (
    <>
      <FormContainer defaultValues={defaultValues} onSuccess={onSubmit}>
        <Stack direction={'column'}>
          <TextFieldElement name={'hallo'} label={'hallo'} /> <br />
          <TextFieldElement
            color={'primary'}
            name={'primary'}
            label={'Primary'}
          />
          <br />
          <TextFieldElement
            color={'secondary'}
            name={'secondary'}
            label={'Secondary'}
          />
          <br />
          <Button type={'submit'} variant={'contained'} color={'primary'}>
            Submit
          </Button>
        </Stack>
      </FormContainer>
      <div>
        Data:
        <br />
        {JSON.stringify(values)}
      </div>
    </>
  )
}
