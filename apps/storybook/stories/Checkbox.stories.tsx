import {CheckboxElement, FormContainer} from 'react-hook-form-mui'
import {Meta, StoryObj} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {Box, Button} from '@mui/material'
import React from 'react'

const meta = {
  title: 'Checkbox/Checkbox',
  component: CheckboxElement,
  decorators: [FormWrap],
} satisfies Meta<typeof CheckboxElement>

export default meta
type Story = StoryObj<typeof meta>

function FormWrap(Story) {
  return (
    <FormContainer
      onSuccess={action('form-submit')}
      defaultValues={{
        preselect: {id: 2, label: 'Second'},
        'multi-preselect': [{id: 2, label: 'Second'}],
        'match-id': 2,
        'match-id-multi': [2, 3],
      }}
    >
      <Story />
      <Box marginTop={2}>
        <Button type={'submit'}>Submit</Button>
      </Box>
    </FormContainer>
  )
}

export const Basic: Story = {
  args: {
    label: 'Label',
    name: 'basic',
  },
}

export const Required: Story = {
  args: {
    label: 'Label',
    name: 'basic',
    required: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    name: 'basic',
    disabled: true,
  },
}

export const LabelPosition: Story = {
  args: {
    label: 'Label',
    name: 'basic',
    labelProps: {
      labelPlacement: 'top',
    },
  },
}
