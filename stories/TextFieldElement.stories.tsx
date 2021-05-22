import * as React from 'react'
import { FunctionComponent, useEffect } from 'react'
import { CheckboxElement, FormContainer, PasswordElement, TextFieldElement } from '../src'
import { action } from '@storybook/addon-actions'
import Button from '@material-ui/core/Button'
import { FieldError, useForm, useFormContext } from 'react-hook-form'

const parseError = (error: FieldError) => {
  if (error.type === 'pattern') {
    return 'Enter an email'
  }
  return 'This field is required'
}

const PasswordRepeat: FunctionComponent = () => {
  const { getValues } = useFormContext()
  return (
    <PasswordElement margin={'dense'}
                     label={'Password Repeat'}
                     required
                     parseError={parseError}
                     validation={{
                       validate: (value: string) => {
                         const { password } = getValues()
                         return value === password || 'Password should match'
                       }
                     }}
                     name={'password-repeat'}
    />
  )
}

export default {
  title: 'TextFieldElement'
}

export const Basic = () => {
  const form = {
    agree: false
  }

  return (
    <FormContainer defaultValues={form} onSuccess={action('submit')}
                   FormProps={{
                     'aria-autocomplete': 'none',
                     autoComplete: 'new-password'
                   }}>
      <TextFieldElement
        required
        autoComplete={'new-password'}
        margin={'dense'}
        label={'Name'}
        name={'default-text-field'}
      /><br />
      <TextFieldElement
        required
        type={'email'}
        margin={'dense'}
        label={'Email'}
        name={'default-email-field'}
      /><br />
      <TextFieldElement
        required
        parseError={parseError}
        type={'email'}
        margin={'dense'}
        label={'Email with ParseError'}
        name={'default-email-field-with-parsed'}
      /><br />
      <TextFieldElement
        margin={'dense'}
        label={'Number'}
        name={'number-text-field'}
        required
        type={'number'}
      /><br />
      <PasswordElement margin={'dense'}
                       label={'Password'}
                       required
                       name={'password'}
      /><br />
      <PasswordRepeat /><br />
      <CheckboxElement name={'agree'} label={'Agree'} required /><br />
      <Button type={'submit'} color={'primary'} variant={'contained'}>Submit</Button>
    </FormContainer>
  )
}

export const PreDefined = () => (
  <FormContainer defaultValues={{
    'default-text-field': 'Test Data',
    'default-email-field': 'info@example.com',
    'number-text-field': 6
  }} onSuccess={action('submit')}
  >
    <TextFieldElement
      required
      margin={'dense'}
      label={'Name'}
      name={'default-text-field'}
    /><br />
    <TextFieldElement
      required
      parseError={parseError}
      type={'email'}
      margin={'dense'}
      label={'Email'}
      name={'default-email-field'}
    /><br />
    <TextFieldElement
      margin={'dense'}
      label={'Number'}
      name={'number-text-field'}
      required
      type={'number'}
    /><br />
    <Button type={'submit'} color={'primary'} variant={'contained'}>Submit</Button>
  </FormContainer>
)


export const PreDefinedNested = () => (
  <FormContainer defaultValues={{
    a: {
      'default-text-field': 'Test Data'
    },
    b: {
      'default-email-field': 'info@example.com',
      'number-text-field': 6
    }
  }}
                 onSuccess={action('submit')}
  >
    <TextFieldElement
      required
      margin={'dense'}
      label={'Name'}
      name={'a.default-text-field'}
    /><br />
    <TextFieldElement
      required
      parseError={parseError}
      type={'email'}
      margin={'dense'}
      label={'Email'}
      name={'b.default-email-field'}
    /><br />
    <TextFieldElement
      margin={'dense'}
      label={'Number'}
      name={'b.number-text-field'}
      required
      type={'number'}
    /><br />
    <Button type={'submit'} color={'primary'} variant={'contained'}>Submit</Button>
  </FormContainer>
)


export const WithFormContext = () => {
  const formContext = useForm<{ email: string, name: string }>({
    defaultValues: {
      email: '',
      name: ''
    }
  })
  const { watch } = formContext
  const emailValue = watch('email')

  useEffect(
    () => {
      console.log('email changed', emailValue)
    },
    [emailValue]
  )
  return (
    <FormContainer onSuccess={action('submit')}
                   formContext={formContext}>
      <TextFieldElement name={'name'} label={'Name'} parseError={parseError} required variant={'outlined'}
                        margin={'dense'} /><br />
      <TextFieldElement name={'email'} type="email" label={'Email'} required parseError={parseError}
                        variant={'outlined'} margin={'dense'} /><br /><br />
      <Button type={'submit'} color={'primary'} variant={'contained'}>Submit</Button>
    </FormContainer>
  )
}

