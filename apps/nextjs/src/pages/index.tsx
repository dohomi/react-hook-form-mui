import {useState} from 'react'
import {Button, Stack} from '@mui/material'

import {FormContainer, TextFieldElement} from 'react-hook-form-mui'
import {DatePickerElement} from 'react-hook-form-mui/date-pickers'
import {LocalizationProvider} from '@mui/x-date-pickers'

// https://mui.com/x/react-date-pickers/getting-started/#setup-your-date-library-adapter
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3'

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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePickerElement name={'date'} label={'Date'} />
          </LocalizationProvider>
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
