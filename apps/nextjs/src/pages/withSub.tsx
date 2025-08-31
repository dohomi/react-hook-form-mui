import {Alert, Button, Stack} from '@mui/material'
import {FormContainer, TextFieldElement, useWatch} from 'react-hook-form-mui'
import {DatePickerElement} from 'react-hook-form-mui/date-pickers'
import {DateFnsProvider} from 'react-hook-form-mui/date-fns'

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
        <DateFnsProvider>
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
            <DatePickerElement name={'date'} label={'Date'} /> <br />
            <SubComponent />
          </Stack>
        </DateFnsProvider>
      </FormContainer>
    </div>
  )
}
