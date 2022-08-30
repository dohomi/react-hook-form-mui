import {FormContainer, ToggleButtonGroupElement, ToggleButtonGroupElementProps} from "react-hook-form-mui";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {SubmitButton} from "../src/Shared";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

export default {
    title: 'ToggleButtonGroupElement',
    component: ToggleButtonGroupElement
} as ComponentMeta<typeof ToggleButtonGroupElement>

const Template: ComponentStory<typeof ToggleButtonGroupElement> = (args) => (
    <FormContainer defaultValues={{}} onSuccess={action('submit')}>
        <ToggleButtonGroupElement {...args} />
        <br/>
        <SubmitButton/>
    </FormContainer>
)

const options: ToggleButtonGroupElementProps<any>['options'] = [{
    id: 'first',
    label: 'First'
}, {
    id: 'second',
    label: 'Second'
}, {
    id: 'third',
    label: 'Third'
}]

const optionIcons: ToggleButtonGroupElementProps<any>['options'] = [{
    id: 'left',
    label: <FormatAlignLeftIcon/>
}, {
    id: 'center',
    label: <FormatAlignCenterIcon/>
}, {
    id: 'right',
    label: <FormatAlignRightIcon/>
}, {
    id: 'justify',
    label: <FormatAlignJustifyIcon/>

}]

export const Basic = Template.bind({})
Basic.args = {
    name: 'basic',
    options
}

export const Exclusive = Template.bind({})
Exclusive.args = {
    name: 'exclusive',
    options,
    exclusive: true
}

export const WithIcons = Template.bind({})
WithIcons.args = {
    name: 'exclusive',
    options: optionIcons
}

export const WithLabel = Template.bind({})
WithLabel.args = {
    name: 'exclusive',
    options: optionIcons,
    label: 'Please Select'
}

export const WithLabelRequired = Template.bind({})
WithLabelRequired.args = {
    name: 'exclusive',
    options: optionIcons,
    label: 'Please Select',
    required: true
}

export const WithCustomHelperText = Template.bind({})
WithCustomHelperText.args = {
    name: 'exclusive',
    options: optionIcons,
    label: 'Please Select',
    required: true,
    helperText: 'Some helper text'
}

