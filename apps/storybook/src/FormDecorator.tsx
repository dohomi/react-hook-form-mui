import {action} from '@storybook/addon-actions'
import {SubmitButton} from './Shared'
import {FormContainer} from 'react-hook-form-mui/src'
import {DateFnsProvider} from 'react-hook-form-mui/src/date-fns'

export function FormContainerDecorator(Story) {
  return (
    <DateFnsProvider>
      <FormContainer
        defaultValues={{
          preset: '2023-02-01',
          datetime: null,
          wrong_date: '2023-13-199',
        }}
        onSuccess={action('submit')}
      >
        <Story />
        <SubmitButton />
      </FormContainer>
    </DateFnsProvider>
  )
}

export function FormContainerDecoratorBasic(Story) {
  return (
    <FormContainer
      defaultValues={{
        preset: '2023-02-01',
        datetime: null,
        wrong_date: '2023-13-199',
      }}
      onSuccess={action('submit')}
    >
      <Story />
      <SubmitButton />
    </FormContainer>
  )
}
