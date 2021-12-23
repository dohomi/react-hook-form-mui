import React from 'react'
import { FormContainer, TextFieldElement } from '../src'
import { useForm, useWatch } from 'react-hook-form'
import { Button } from '@mui/material'
import { action } from '@storybook/addon-actions'

export default {
  title: 'FormContainer'
}

const SubComponent = () => {
  const [name, email] = useWatch({
    name: ['name', 'email']
  })
  console.log(name, email)
  return (
    <>
      <Button type={'submit'} color={'primary'} disabled={!(name && email)}>Submit</Button>
    </>
  )
}

export const Basic = () => (
  <FormContainer
    defaultValues={{
      name: ''
    }}
    onSuccess={action('submit')}
  >
    <TextFieldElement name={'name'} label={'Name'} required /> <br />
    <TextFieldElement name={'email'} label={'Email'} required type={'email'} /> <br />
    <TextFieldElement name={'interest'} label={'Interest'} /> <br />
    <SubComponent />
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
