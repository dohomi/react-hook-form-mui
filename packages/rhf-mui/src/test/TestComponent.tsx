import {FormContainer} from '../FormContainer'
import {TextFieldElement} from '../TextFieldElement'
import {useForm} from 'react-hook-form'

function TestComponent() {
  const context = useForm()
  return (
    <FormContainer formContext={context}>
      <TextFieldElement
        control={context.control}
        name={'textfield'}
      ></TextFieldElement>
    </FormContainer>
  )
}
