import {useEffect} from 'react'
import {action} from '@storybook/addon-actions'
import {Button, Stack} from '@mui/material'
import {FieldError, useForm} from 'react-hook-form'
import {
  CheckboxElement,
  FormContainer,
  FormErrorProvider,
  PasswordElement,
  PasswordRepeatElement,
  TextFieldElement,
} from 'react-hook-form-mui/src'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {SubmitButton} from '../src/Shared'

export default {
  title: 'TextFieldElement',
  component: TextFieldElement,
} as ComponentMeta<typeof TextFieldElement>

const Template: ComponentStory<typeof TextFieldElement> = (args) => (
  <FormContainer defaultValues={{}} onSuccess={action('submit')}>
    <TextFieldElement {...args} />
    <br />
    <SubmitButton />
  </FormContainer>
)

export const Core = Template.bind({})
Core.args = {
  name: 'core',
  label: 'Label',
}

const parseError = (error: FieldError) => {
  if (error.type === 'pattern') {
    return 'Enter an email'
  }
  return 'This field is required'
}

export const Basic = () => {
  const form = {
    agree: false,
  }

  return (
    <FormContainer
      defaultValues={form}
      onSuccess={action('submit')}
      FormProps={{
        'aria-autocomplete': 'none',
        autoComplete: 'new-password',
      }}
    >
      <TextFieldElement
        required
        autoComplete={'new-password'}
        margin={'dense'}
        label={'Name'}
        name={'default-text-field'}
      />
      <br />
      <TextFieldElement
        required
        type={'email'}
        margin={'dense'}
        label={'Email'}
        name={'default-email-field'}
      />
      <br />
      <TextFieldElement
        required
        parseError={parseError}
        type={'email'}
        margin={'dense'}
        label={'Email with ParseError'}
        name={'default-email-field-with-parsed'}
      />
      <br />
      <TextFieldElement
        margin={'dense'}
        label={'Number'}
        name={'number-text-field'}
        required
        type={'number'}
      />
      <br />
      <PasswordElement
        margin={'dense'}
        label={'Password'}
        required
        name={'password'}
      />
      <br />
      <PasswordRepeatElement
        passwordFieldName={'password'}
        name={'password-repeat'}
        margin={'dense'}
        label={'Repeat Password'}
        required
      />
      <br />
      <TextFieldElement name={'textarea'} multiline />
      <br />
      <CheckboxElement
        name={'agree'}
        label={'Agree'}
        required
        onChange={(ev, checked) => console.log(ev, checked)}
      />
      <br />
      <Button type={'submit'} color={'primary'} variant={'contained'}>
        Submit
      </Button>
    </FormContainer>
  )
}

export const PreDefined = () => (
  <FormContainer
    defaultValues={{
      'default-text-field': 'Test Data',
      'default-email-field': 'info@nextjs.com',
      'number-text-field': 6,
    }}
    onSuccess={action('submit')}
  >
    <TextFieldElement
      required
      margin={'dense'}
      label={'Name'}
      name={'default-text-field'}
    />
    <br />
    <TextFieldElement
      required
      parseError={parseError}
      type={'email'}
      margin={'dense'}
      label={'Email'}
      name={'default-email-field'}
    />
    <br />
    <TextFieldElement
      margin={'dense'}
      label={'Number'}
      name={'number-text-field'}
      required
      type={'number'}
    />
    <br />
    <Button type={'submit'} color={'primary'} variant={'contained'}>
      Submit
    </Button>
  </FormContainer>
)

export const PreDefinedNested = () => (
  <FormContainer
    defaultValues={{
      a: {
        'default-text-field': 'Test Data',
      },
      b: {
        'default-email-field': 'info@nextjs.com',
        'number-text-field': 6,
      },
    }}
    onSuccess={action('submit')}
  >
    <TextFieldElement
      required
      margin={'dense'}
      label={'Name'}
      name={'a.default-text-field'}
    />
    <br />
    <TextFieldElement
      required
      parseError={parseError}
      type={'email'}
      margin={'dense'}
      label={'Email'}
      name={'b.default-email-field'}
    />
    <br />
    <TextFieldElement
      margin={'dense'}
      label={'Number'}
      name={'b.number-text-field'}
      required
      type={'number'}
    />
    <br />
    <Button type={'submit'} color={'primary'} variant={'contained'}>
      Submit
    </Button>
  </FormContainer>
)

export const WithFormContext = () => {
  const formContext = useForm<{email: string; name: string}>({
    defaultValues: {
      email: '',
      name: '',
    },
  })
  const {watch} = formContext
  const emailValue = watch('email')

  useEffect(() => {
    console.log('email changed', emailValue)
  }, [emailValue])
  return (
    <FormContainer onSuccess={action('submit')} formContext={formContext}>
      <TextFieldElement
        name={'name'}
        label={'Name'}
        parseError={parseError}
        required
        variant={'outlined'}
        margin={'dense'}
      />
      <br />
      <TextFieldElement
        name={'email'}
        type="email"
        label={'Email'}
        required
        parseError={parseError}
        variant={'outlined'}
        margin={'dense'}
      />
      <br />
      <br />
      <Button type={'submit'} color={'primary'} variant={'contained'}>
        Submit
      </Button>
    </FormContainer>
  )
}

export const WithFormErrorProvider = () => (
  <FormErrorProvider
    onError={(error) => {
      console.log('you can hook your own error message', error)
      if (error.type === 'required') {
        return 'Overwritten Error Message'
      }
      return error?.message
    }}
  >
    <FormContainer onSuccess={action('submit')}>
      <Stack spacing={3}>
        <TextFieldElement
          name={'name'}
          label={'Name'}
          required
          variant={'outlined'}
          margin={'dense'}
        />
        <TextFieldElement
          name={'email'}
          type="email"
          label={'Email'}
          required
          variant={'outlined'}
          margin={'dense'}
        />
        <Button type={'submit'} color={'primary'} variant={'contained'}>
          Submit
        </Button>
      </Stack>
    </FormContainer>
  </FormErrorProvider>
)

export const WithTransformations = () => {
  const form = {
    lowercase: 'play with me',
    numbersOnly: 12345,
  }
  return (
    <FormContainer
      defaultValues={form}
      onSuccess={action('submit')}
      FormProps={{
        'aria-autocomplete': 'none',
      }}
    >
      <p>
        You can use <code>transformValue</code> and <code>parseValue</code> to
        present the stored value in a different format to the user.
      </p>
      <TextFieldElement
        name={'lowercase'}
        margin={'dense'}
        label={'Lowercase transformation'}
        parseValue={(value) => String(value).toUpperCase()}
        transformValue={(value) => String(value).toLowerCase()}
        helperText={
          'The text is always shown in uppercase, but stored in lowercase'
        }
        required
      />
      <br />
      <TextFieldElement
        name={'numbersOnly'}
        margin={'dense'}
        label={'Numbers only'}
        transformValue={(value) => {
          const valueAsNUmber = parseFloat(value as string)
          if (isNaN(valueAsNUmber)) {
            return 0
          }
          return valueAsNUmber
        }}
        helperText={
          'Transforms the input value into a number without using type="number"'
        }
        required
      />
      <SubmitButton />
    </FormContainer>
  )
}
