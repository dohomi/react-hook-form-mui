import React from 'react'
import { DatePickerElement, FormContainer } from '../src'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from '@material-ui/core/Button'
import DateDayjsProvider from '../src/DateDayjsProvider'

export default {
  title: 'DatePickerElement'
}
export const Basic = () => (
  <DateDayjsProvider>
    <FormContainer defaultValues={{
      'default-date-picker': '2020-01-01',
      'basic-data-picker': null,
      'basic2-data-picker': null,
      'required-date-picker': null
    }} onSuccess={action('submit')}>
      <div>
        <DatePickerElement
          label={text('label', 'Default date picker')}
          name={'basic-data-picker'}
        />
      </div>
      <div>
        <DatePickerElement
          label={text('label2', 'Opens year')}
          name={'basic2-data-picker'}
          openTo="year"
        />
      </div>
      <div>
        <DatePickerElement
          label={text('label3', 'Required date picker')}
          name={'required-date-picker'}
          required
          openTo="year"
        />
      </div>
      <div>
        <DatePickerElement
          label={'Default date picker'}
          name={'default-date-picker'}
          required
          helperText={'Default value set to 01/01/2020'}

        />
      </div>
      <Button type={'submit'} color={'primary'}>Submit</Button>
    </FormContainer>
  </DateDayjsProvider>
)

