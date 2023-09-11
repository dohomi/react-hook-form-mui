import {action} from '@storybook/addon-actions'
import {InputAdornment, Stack} from '@mui/material'
import {FieldError} from 'react-hook-form'
import {
  CheckboxElement,
  FormContainer,
  FormErrorProvider,
  PasswordElement,
  PasswordRepeatElement,
  TextFieldElement,
} from 'react-hook-form-mui/src'
import {Meta, StoryObj} from '@storybook/react'
import {SubmitButton} from '../src/Shared'
import {AccountCircle} from '@mui/icons-material'

const meta = {
  title: 'TextFieldElement',
  component: TextFieldElement,
  decorators: [FormWrap],
} satisfies Meta<typeof TextFieldElement>
export default meta

type Story = StoryObj<typeof meta>

function FormWrap(Story) {
  return (
    <FormContainer
      defaultValues={{
        'default-text-field': 'Test Data',
        'default-email-field': 'info@nextjs.com',
        'number-text-field': 6,
        a: {
          'default-text-field': 'Test Data',
        },
        b: {
          'default-email-field': 'info@nextjs.com',
          'number-text-field': 6,
        },
      }}
      onSuccess={action('submit')}
      FormProps={{
        'aria-autocomplete': 'none',
        autoComplete: 'new-password',
      }}
    >
      <Story />
      <br />
      <SubmitButton />
    </FormContainer>
  )
}

export const Core: Story = {
  args: {
    name: 'core',
    label: 'Label',
  },
}

const parseError = (error: FieldError) => {
  if (error.type === 'pattern') {
    return 'Enter an email'
  }
  return 'This field is required'
}

export const Basic = () => {
  return (
    <div>
      <TextFieldElement
        required
        autoComplete={'new-password'}
        margin={'dense'}
        label={'Name'}
        name={'default-text'}
      />
      <br />
      <TextFieldElement
        required
        type={'email'}
        margin={'dense'}
        label={'Email'}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        name={'default-email'}
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
        name={'number-text'}
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
    </div>
  )
}

export const PreDefined = () => (
  <div>
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
  </div>
)

export const PreDefinedNested = () => (
  <div>
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
  </div>
)

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
    </Stack>
  </FormErrorProvider>
)
