import {AutocompleteElement, FormContainer} from 'react-hook-form-mui/src'
import React from 'react'
import {Meta, StoryObj} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import {Box, Button, Tooltip} from '@mui/material'
import LocationIcon from '@mui/icons-material/LocationOn'
import AutoModeIcon from '@mui/icons-material/AutoMode'
const meta = {
  title: 'Autocomplete',
  component: AutocompleteElement,
  decorators: [FormWrap],
} satisfies Meta<typeof AutocompleteElement>

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

const options = [
  {label: 'First', id: 1},
  {label: 'Second', id: 2},
  {label: 'Third', id: 3},
  {
    label: 'Four',
    id: 4,
  },
]

export const Basic: Story = {
  args: {
    name: 'basic',
    options,
  },
}

export const BasicPreSelect = {
  args: {
    name: 'preselect',
    options,
  },
}

export const MultiSelect = {
  args: {
    name: 'multi',
    options,
    multiple: true,
  },
}

export const MultiSelectRequired = {
  args: {
    label: 'Multiple Required',
    name: 'multi-required',
    options,
    multiple: true,
    required: true,
  },
}

export const MultiSelectRequiredCustom = {
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
  args: {
    name: 'multi-preselect',
    options,
    multiple: true,
  },
}

export const MultiSelectCheckbox = {
  args: {
    name: 'multicheck',
    options,
    multiple: true,
    showCheckbox: true,
  },
}

export const Loading = {
  args: {
    label: 'Loading State',
    name: 'loading',
    options: [],
    multiple: true,
    showCheckbox: true,
    loading: true,
  },
}

export const WithCustomLoading = {
  args: {
    label: 'Loading State',
    name: 'loading',
    options: [],
    multiple: true,
    showCheckbox: true,
    loading: true,
    loadingIndicator: <AutoModeIcon />,
  },
}

export const MatchId = {
  args: {
    label: 'Match ID',
    name: 'match-id',
    options,
    matchId: true,
  },
}

export const MatchIdMulti = {
  args: {
    label: 'Match ID',
    name: 'match-id-multi',
    options,
    multiple: true,
    matchId: true,
  },
}

export const CustomInput = {
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
