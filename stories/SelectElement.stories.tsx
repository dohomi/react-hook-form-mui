import * as React from 'react'
import { FormContainer, SelectElement } from '../src'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import { action } from '@storybook/addon-actions'
import { object, text } from '@storybook/addon-knobs'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  })
)

export default {
  title: 'SelectElement'
}

export const Basic = () => {
  const classes = useStyles()
  return (
    <FormContainer defaultValues={{
      'default-select-element': '',
      'pre-select-element': '1'
    }} onSuccess={action('submit')}>
      <SelectElement
        className={classes.formControl}
        value='Basic Select'
        required
        parseError={() => {
          return 'This field is required'
        }}
        label={text('label', 'The label')}
        name='default-select-element'
        options={object('Options', [{ id: '1', title: 'Label 1' }, { id: '2', title: 'label 2' }])}
        onChange={action('change')}
      /><br />
      <SelectElement
        className={classes.formControl}
        value='Basic Select'
        required
        parseError={() => {
          return 'This field is required'
        }}
        label={text('label', 'The label')}
        name='pre-select-element'
        options={object('Options', [{ id: '1', title: 'Label 1' }, { id: '2', title: 'label 2' }])}
        onChange={action('change')}
        objectOnChange
      /><br />
      <Button type={'submit'} color={'primary'}>Submit</Button>
    </FormContainer>
  )
}
