import {AutocompleteElement, FormContainer} from 'react-hook-form-mui/src'
import React, {FC, PropsWithChildren} from 'react'
import {Meta, StoryFn} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {Box, Button, Tooltip} from '@mui/material'
import LocationIcon from '@mui/icons-material/LocationOn'

export default {
  title: 'Autocomplete',
  component: AutocompleteElement,
} as Meta<typeof AutocompleteElement>

const FormWrap: FC<PropsWithChildren> = ({children}) => (
  <FormContainer
    onSuccess={action('form-submit')}
    defaultValues={{
      preselect: {id: 2, label: 'Second'},
      'multi-preselect': [{id: 2, label: 'Second'}],
      'match-id': 2,
      'match-id-multi': [2, 3],
    }}
  >
    {children}
    <Box marginTop={2}>
      <Button type={'submit'}>Submit</Button>
    </Box>
  </FormContainer>
)

const Template: StoryFn<typeof AutocompleteElement> = (args) => {
  return (
    <FormWrap>
      <AutocompleteElement {...args} />
    </FormWrap>
  )
}

const options = [
  {label: 'First', id: 1},
  {label: 'Second', id: 2},
  {label: 'Third', id: 3},
  {
    label: 'Four',
    id: 4,
  },
]

export const Basic = {
  render: Template,

  args: {
    name: 'basic',
    options,
  },
}

export const BasicPreSelect = {
  render: Template,

  args: {
    name: 'preselect',
    options,
  },
}

export const MultiSelect = {
  render: Template,

  args: {
    name: 'multi',
    options,
    multiple: true,
  },
}

export const MultiSelectRequired = {
  render: Template,

  args: {
    label: 'Multiple Required',
    name: 'multi-required',
    options,
    multiple: true,
    required: true,
  },
}

export const MultiSelectRequiredCustom = {
  render: Template,

  args: {
    label: 'Multiple Required Custom',
    name: 'multi-required-custom',
    options,
    multiple: true,
    rules: {
      required: 'Please fill out.',
    },
  },
}

export const MultiSelectPredefined = {
  render: Template,

  args: {
    name: 'multi-preselect',
    options,
    multiple: true,
  },
}

export const MultiSelectCheckbox = {
  render: Template,

  args: {
    name: 'multicheck',
    options,
    multiple: true,
    showCheckbox: true,
  },
}

export const Loading = {
  render: Template,

  args: {
    label: 'Loading State',
    name: 'loading',
    options: [],
    multiple: true,
    showCheckbox: true,
    loading: true,
  },
}

export const MatchId = {
  render: Template,

  args: {
    label: 'Match ID',
    name: 'match-id',
    options,
    matchId: true,
  },
}

export const MatchIdMulti = {
  render: Template,

  args: {
    label: 'Match ID',
    name: 'match-id-multi',
    options,
    multiple: true,
    matchId: true,
  },
}

export const CustomInput = {
  render: Template,

  args: {
    name: 'custom-input',
    options,
    textFieldProps: {
      placeholder: 'Some placeholder',
      InputProps: {startAdornment: <LocationIcon />, endAdornment: null},
    },
  },
}

export const WithTooltip = () => (
  <FormWrap>
    <Tooltip title={'Some Tooltip'}>
      <div>
        <AutocompleteElement
          options={options}
          name={'tooltip'}
          label={'With Tooltip'}
        />
      </div>
    </Tooltip>
  </FormWrap>
)
