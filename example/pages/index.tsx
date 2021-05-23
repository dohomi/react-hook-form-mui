import { DatePickerElement, FormContainer, TextFieldElement } from 'react-form-hook-mui'
import { Button } from '@material-ui/core'

type FormProps = {
  hallo: string
}
export default function Index() {
  const onSubmit = (values: FormProps) => {
    try {
      console.log(values)
    } catch (e) {

    }
  }
  let defaultValues: FormProps = { hallo: '' }
  return (
    <div>
      <FormContainer defaultValues={defaultValues} onSuccess={onSubmit}>
        <TextFieldElement name={'hallo'} label={'Hallo'} /><br />
        <TextFieldElement color={'primary'} name={'primary'} label={'Primary'} />
        <DatePickerElement name={'date'} label={'Date'} />
        <br />
        <Button type={'submit'} variant={'contained'} color={'primary'}>Submit</Button>
      </FormContainer>
    </div>
  )
}

