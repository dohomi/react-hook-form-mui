import {
  AutocompleteElement,
  CheckboxButtonGroup,
  CheckboxElement,
  FormContainer,
  MultiSelectElement,
  PasswordElement,
  PasswordRepeatElement,
  RadioButtonGroup,
  SelectElement,
  SwitchElement,
  TextFieldElement,
} from 'react-hook-form-mui/src'
import {useForm, useWatch} from 'react-hook-form'
import {Button, Stack} from '@mui/material'
import {action} from '@storybook/addon-actions'
import {Meta, StoryObj} from '@storybook/react'
import {DateFnsProvider} from 'react-hook-form-mui/src/date-fns'
import {DatePickerElement} from 'react-hook-form-mui/src/date-pickers'

const meta = {
  title: 'FormContainer',
  component: FormContainer,
} satisfies Meta<typeof FormContainer>
export default meta
type Story = StoryObj<typeof meta>

function SubComponent() {
  const [name, email] = useWatch({
    name: ['name', 'email'],
  })
  return (
    <Button type={'submit'} color={'primary'} disabled={!(name && email)}>
      Submit
    </Button>
  )
}

export const Basic: Story = {
  render: () => (
    <FormContainer
      defaultValues={{
        name: '',
      }}
      onSuccess={action('submit')}
    >
      <Stack spacing={2}>
        <TextFieldElement name={'name'} label={'Name'} required />
        <TextFieldElement
          name={'email'}
          label={'Email'}
          required
          type={'email'}
        />{' '}
        <TextFieldElement name={'interest'} label={'Interest'} />
        <SubComponent />
      </Stack>
    </FormContainer>
  ),
}

export const WithErrorHandler: Story = {
  render: () => (
    <FormContainer
      defaultValues={{
        name: '',
      }}
      onSuccess={action('submit')}
      onError={action('error')}
    >
      <Stack spacing={2}>
        <TextFieldElement name={'name'} label={'Name'} required />
        <TextFieldElement
          name={'email'}
          label={'Email'}
          required
          type={'email'}
        />{' '}
        <TextFieldElement name={'interest'} label={'Interest'} />
        <SubComponent />
      </Stack>
    </FormContainer>
  ),
}

export const WithContext: Story = {
  render: () => {
    const formContext = useForm<{name: string}>({
      defaultValues: {
        name: '',
      },
    })
    return (
      <FormContainer formContext={formContext} onSuccess={action('submit')}>
        <Stack spacing={2}>
          <TextFieldElement name={'name'} label={'Name'} />
          <Button type={'submit'} color={'primary'}>
            Submit
          </Button>
        </Stack>
      </FormContainer>
    )
  },
}

export const WithHandleSubmit: Story = {
  render: () => {
    const formContext = useForm<{name: string}>({
      defaultValues: {
        name: 'Hans',
      },
    })
    const {handleSubmit} = formContext
    return (
      <FormContainer
        formContext={formContext}
        handleSubmit={handleSubmit(action('submit'))}
      >
        <Stack spacing={2}>
          <TextFieldElement name={'name'} label={'Name'} />
          <Button type={'submit'} color={'primary'}>
            Submit
          </Button>
        </Stack>
      </FormContainer>
    )
  },
}

export const NoDefaultValues: Story = {
  render: () => {
    return (
      <FormContainer onSuccess={action('submit')}>
        <Stack spacing={2}>
          <TextFieldElement name={'name'} label={'Name'} />
          <Button type={'submit'} color={'primary'}>
            Submit
          </Button>
        </Stack>
      </FormContainer>
    )
  },
}

export const StrictTypingForm: Story = {
  render: () => {
    const {control, handleSubmit} = useForm<{
      multi_select: string[]
      name: string
      auto: string
      auto_multi: string[]
      select: string
      switch: boolean
      checkbox: string[]
      check: boolean
      date: string
      radio: string
      password: string
      password_repeat: string
    }>({
      defaultValues: {
        name: '',
      },
    })
    const options = [
      {id: 'one', label: 'One'},
      {id: 'two', label: 'Two'},
      {id: 'three', label: 'Three'},
    ]
    return (
      <DateFnsProvider>
        <form onSubmit={handleSubmit(() => action('submit'))} noValidate>
          <Stack spacing={2}>
            <TextFieldElement
              name={'name'}
              label={'Name'}
              control={control}
              required
              fullWidth
            />
            <AutocompleteElement
              name={'auto'}
              label={'Autocomplete'}
              control={control}
              options={options}
            />
            <AutocompleteElement
              name={'auto_multi'}
              label={'Autocomplete Multiple'}
              multiple
              control={control}
              options={options}
            />
            <SelectElement
              name={'select'}
              label={'Select'}
              control={control}
              options={options}
              fullWidth
            />
            <MultiSelectElement
              showCheckbox
              name={'multi_select'}
              label={'Multi Select'}
              control={control}
              options={options}
              fullWidth
            />
            <DatePickerElement name={'date'} control={control} /> <br />
            <RadioButtonGroup
              name={'radio'}
              label={'Radio'}
              control={control}
              options={options}
            />
            <CheckboxButtonGroup
              name={'checkbox'}
              label={'Radio'}
              control={control}
              options={options}
            />
            <PasswordElement
              name={'password'}
              label={'Password'}
              control={control}
            />
            <PasswordRepeatElement
              name={'password_repeat'}
              label={'Password Repeat'}
              passwordFieldName={'password'}
              control={control}
            />
            <SwitchElement name={'switch'} label={'Switch'} control={control} />
            <CheckboxElement name={'check'} label={'Check'} control={control} />
            <Button type={'submit'} color={'primary'}>
              Submit
            </Button>
          </Stack>
        </form>
      </DateFnsProvider>
    )
  },
}
