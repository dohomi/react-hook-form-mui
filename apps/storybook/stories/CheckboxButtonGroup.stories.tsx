import {action} from '@storybook/addon-actions'
import {CheckboxButtonGroup, FormContainer} from 'react-hook-form-mui'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {SubmitButton} from '../src/Shared'

export default {
    title: 'CheckboxButtonGroup',
    component: CheckboxButtonGroup
} as ComponentMeta<typeof CheckboxButtonGroup>

const Template: ComponentStory<typeof CheckboxButtonGroup> = (args) => (
    <FormContainer defaultValues={{}} onSuccess={action('submit')}>
        <CheckboxButtonGroup {...args} />
        <br/>
        <SubmitButton/>
    </FormContainer>
)

export const Basic = Template.bind({})
Basic.args = {
    label: 'Label',
    name: 'basic-checkbox-button-group',
    options: [{id: '1', label: 'Label 1'}, {id: '2', label: 'label 2'}]
}

export const Inline = Template.bind({})
Inline.args = {
    label: 'Inline',
    row: true,
    name: 'basic-checkbox-inline',
    options: [{id: '1', label: 'Label 1'}, {id: '2', label: 'label 2'}]
}

export const ReturnObject = Template.bind({})
ReturnObject.args = {
    label: 'Object',
    returnObject: true,
    name: 'basic-checkbox-object',
    options: [{id: '1', label: 'Label 1'}, {id: '2', label: 'label 2'}]
}

export const Required = Template.bind({})
Required.args = {
    label: 'Required',
    required: true,
    name: 'basic-checkbox-required',
    options: [{id: '1', label: 'Label 1'}, {id: '2', label: 'label 2'}]
}

export const Disabled = Template.bind({})
Disabled.args = {
    label: 'Disabled',
    disabled: true,
    name: 'basic-checkbox-disabled',
    options: [{id: '1', label: 'Label 1'}, {id: '2', label: 'label 2'}]
}
