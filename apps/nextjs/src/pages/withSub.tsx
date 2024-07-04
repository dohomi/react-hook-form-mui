import {Alert, Button, Stack} from '@mui/material'
import {LocalizationProvider} from '@mui/x-date-pickers'
import {FormContainer, TextFieldElement, useWatch} from 'react-hook-form-mui'
import {DatePickerElement} from 'react-hook-form-mui/date-pickers'

import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3'

const SubComponent = () => {
  const [name, email] = useWatch({
    name: ['name', 'email'],
  })
  return (
    <>
      <Stack spacing={3}>
        <Button
          type={'submit'}
          color={'primary'}
          variant={'contained'}
          disabled={!(name && email)}
        >
          Submit
        </Button>
        <Alert variant={'outlined'} severity={'info'}>
          You have to fill out the required fields before the Button activates.
        </Alert>
      </Stack>
    </>
  )
}

export default function IndexPage() {
  return (
    <div>
      <FormContainer
        defaultValues={{
          name: '',
        }}
        onSuccess={(data) => {
          console.log(data)
        }}
      >
        <Stack direction={'column'}>
          <TextFieldElement name={'name'} label={'Name'} required /> <br />
          <TextFieldElement
            name={'email'}
            label={'Email'}
            required
            type={'email'}
          />{' '}
          <br />
          <TextFieldElement name={'interest'} label={'Interest'} /> <br />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePickerElement name={'date'} label={'Date'} /> <br />
          </LocalizationProvider>
          <SubComponent />
        </Stack>
      </FormContainer>
    </div>
  )
}
