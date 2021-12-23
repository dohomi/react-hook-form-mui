import * as React from 'react'
import { FormContainer, RadioButtonGroup } from '../src'
import { action } from '@storybook/addon-actions'
import { object, text } from '@storybook/addon-knobs'
import { Button } from '@mui/material'

export default {
  title: 'RadioButtonGroup'
}

export const Basic = () => (
  <FormContainer defaultValues={{
    'default-radio-element': '2'
  }} onSuccess={action('submit')}>
    <div>
      <RadioButtonGroup
        label={text('label', 'Simple Radio Group with preset')}
        name="default-radio-element"
        options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
        onChange={action('change')}
      />
    </div>
    <div>
      <RadioButtonGroup
        row={true}
        label={text('label-inline', 'Radio Group inline')}
        name="default-radio-element-inline"
        options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
        onChange={action('change')}
      />
    </div>
    <div>
      <RadioButtonGroup
        label={text('label2', 'Simple Radio Group')}
        name="default-radio-element-empty.deep"
        options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
        onChange={action('change')}
      />
    </div>
    <div>
      <RadioButtonGroup
        label={text('label3', 'Simple Radio Group required')}
        required
        name="default-radio-element-required"
        options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
        onChange={action('change')}
      />
    </div>
    <div>
      <RadioButtonGroup
        label={text('label4', 'Radio Group returns object')}
        required
        returnObject
        name="object-radio-element"
        options={object('Options', [{ id: '1', label: 'Label 1' }, { id: '2', label: 'label 2' }])}
        onChange={action('change')}
      />
    </div>
    <Button type={'submit'} color={'primary'}>Submit</Button>
  </FormContainer>
)


