import { FormContainer, TextFieldElement } from '../src'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'FormContainer'
}

export const Basic = () => (
  <FormContainer
    defaultValues={{
      name: ''
    }}
    onSuccess={action('submit')}
  >
    <TextFieldElement name={'name'} label={'Name'} /> <br />
    <Button type={'submit'} color={'primary'}>Submit</Button>
  </FormContainer>
)

export const WithContext = () => {
  const formContext = useForm<{ name: string }>({
    defaultValues: {
      name: ''
    }
  })
  return (
    <FormContainer
      formContext={formContext}
      onSuccess={action('submit')}
    >
      <TextFieldElement name={'name'} label={'Name'} /><br />
      <Button type={'submit'} color={'primary'}>Submit</Button>
    </FormContainer>
  )
}

export const WithHandleSubmit = () => {
  const formContext = useForm<{ name: string }>({
    defaultValues: {
      name: 'Hans'
    }
  })
  const { handleSubmit } = formContext
  const actionFunc = action('submit')
  const onSubmit = handleSubmit((formData) => {
    actionFunc(formData)
  })
  return (
    <FormContainer
      formContext={formContext}
      handleSubmit={onSubmit}>
      <TextFieldElement name={'name'} label={'Name'} /><br />
      <Button type={'submit'} color={'primary'}>Submit</Button>
    </FormContainer>
  )
}
