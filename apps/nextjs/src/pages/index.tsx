import {useState} from 'react'
import {Button, Stack} from '@mui/material'

import {FormContainer, TextFieldElement} from 'react-hook-form-mui'
import {DatePickerElement} from 'react-hook-form-mui/date-pickers'
import {DateFnsProvider} from 'react-hook-form-mui/date-fns'

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
        <DateFnsProvider>
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
            <DatePickerElement name={'date'} label={'Date'} />
            <br />
            <Button type={'submit'} variant={'contained'} color={'primary'}>
              Submit
            </Button>
          </Stack>
        </DateFnsProvider>
      </FormContainer>
      <div>
        Data:
        <br />
        {JSON.stringify(values)}
      </div>
    </>
  )
}
