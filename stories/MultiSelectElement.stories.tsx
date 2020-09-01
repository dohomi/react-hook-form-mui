import * as React from 'react'
import { FormContainer, MultiSelectElement } from '../src'
import { action } from '@storybook/addon-actions'
import Button from '@material-ui/core/Button'
import { useForm } from 'react-hook-form'

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
]

const objectVals = [
  { id: 1, name: 'Alpha' },
  { id: 2, name: 'Beta' },
  { id: 3, name: 'Celsius' },
  { id: 4, name: 'Delta' }
]

export default {
  title: 'MultiSelectElement'
}

export const Basic = () => (
  <FormContainer defaultValues={{
    'multi-select-iv': ['Van Henry'],
    'multi-select-ov': [1, 3]
  }} onSuccess={action('submit')}>
    <MultiSelectElement menuItems={names} name={'multi-select-basic'} label={'The label'} /> <br /><br />
    <MultiSelectElement required menuItems={names} name={'multi-select-required'} label={'Required'}
                        variant={'outlined'} /><br />
    <MultiSelectElement menuItems={names}
                        name={'multi-select-fw'}
                        showChips
                        label={'Full width'} fullWidth />
    <MultiSelectElement
      menuItems={names}
      name={'multi-select-iv'}
      label={'Initial values'}
      showChips
    /><br />
    <MultiSelectElement
      menuItems={objectVals}
      name={'multi-select-ov'}
      label={'With object vals'}
      helperText="The label (initial values: [1, 3])"
      itemValue={'id'}
      itemKey={'id'}
      itemLabel={'name'}
      variant={'filled'}
    /><br />
    <Button type={'submit'} color={'primary'}>Submit</Button>
  </FormContainer>
)

export const WithFormContext = () => {
  const formContext = useForm<{ to: [number] }>({
    defaultValues: {
      to: [1]
    }
  })
  return (
    <FormContainer onSuccess={action('submit')}
                   formContext={formContext as any}>
      <MultiSelectElement
        menuItems={objectVals}
        name={'to'}
        label={'With object vals'}
        helperText="The label (initial values: [1, 3])"
        itemValue={'id'}
        itemKey={'id'}
        itemLabel={'name'}
        variant={'outlined'}
      />
    </FormContainer>
  )
}
