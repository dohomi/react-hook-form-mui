import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { object, text } from '@storybook/addon-knobs'
import Button from '@material-ui/core/Button'
import { CheckboxButtonGroup, CheckboxElement, FormContainer } from '../src'

export default {
  title: 'CheckboxButtonGroup'
}

export const Basic = () => (
  <FormContainer defaultValues={{
    'basic-checkbox-button-group': ['1'],
    'disabled-checkbox-button-group': ['1']
  }} onSuccess={action('submit')}>
    <div>
      <CheckboxButtonGroup
        label={text('label', 'The label')}
        options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
        name={'basic-checkbox-button-group'}
        onChange={action('selected')}
      />
    </div>
    <div>
      <CheckboxButtonGroup
        label={text('label2', 'Return as object')}
        options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
        name={'object-checkbox-button-group'}
        onChange={action('selected')}
        returnObject
      />
    </div>
    <div>
      <CheckboxButtonGroup
        label={text('label3', 'Required check box')}
        options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
        name={'required-checkbox-button-group'}
        required
        onChange={action('selected')}
      />
    </div>
    <div>
      <CheckboxButtonGroup
        label={text('label3', 'Disabled Checkbox Group')}
        options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
        name={'disabled-checkbox-button-group'}
        onChange={action('selected')}
        disabled={true}
      />
    </div>
    <Button type={'submit'} color={'primary'}>Submit</Button>
  </FormContainer>
)

export const SingleCheckbox = () => (
  <FormContainer defaultValues={{
    'required': false,
    'simple': false,
    'pre-selected': true,
    'pre-selected-required': true
  }} onSuccess={action('submit')}>
    <CheckboxElement name={'simple'} label={'Simple Checkbox'} /><br />
    <CheckboxElement name={'pre-selected'} label={'Pre-Selected Checkbox'} /><br />
    <CheckboxElement name={'required'} label={'Required Checkbox'} required /><br />
    <CheckboxElement name={'pre-selected-required'} label={'Pre-Selected Required Checkbox'} required /><br />
    <Button type={'submit'} color={'primary'}> Submit</Button>
  </FormContainer>
)
