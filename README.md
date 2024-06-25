# Material-UI and react-hook-form combined

<div align="center">
  <a href="https://react-hook-form-material-ui.vercel.app/" rel="noopener" target="_blank">
    <img src="./rhf-mui.png" alt="Material-UI and react-hook-form combined" />
  </a>
</div>

<div align="center">

![GitHub](https://img.shields.io/github/license/dohomi/react-hook-form-mui)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/dohomi/react-hook-form-mui.svg)](http://isitmaintained.com/project/dohomi/react-hook-form-mui 'Average time to resolve an issue')
[![Percentage of issues still open](http://isitmaintained.com/badge/open/dohomi/react-hook-form-mui.svg)](http://isitmaintained.com/project/dohomi/react-hook-form-mui 'Percentage of issues still open')

</div>

## About this project

This project simplifies the use of [`react-hook-form`](https://github.com/react-hook-form/react-hook-form)
and [`Material-UI`](https://github.com/mui/material-ui). It provides opinionated use cases with following
components:

* FormContainer
* AutocompleteElement
* TextFieldElement
* SelectElement
* MultiSelectElement
* RadioButtonGroup
* CheckboxButtonGroup
* CheckboxElement
* SwitchElement
* PasswordElement
* DatePickerElement
* DateTimePickerElement
* SliderElement
* ToggleButtonGroupElement

Please check out the [demo](https://react-hook-form-material-ui.vercel.app/) for the element overview.

## How to use it

### Installation

```console
# npm install react-hook-form react-hook-form-mui
# yarn add react-hook-form react-hook-form-mui
```

This package utilizes pickers and icons of the MUI ecosystem. If you make use of it add them to your app.

```console
#  npm install @mui/x-date-pickers @mui/icons-material
#  yarn add @mui/x-date-pickers @mui/icons-material
```

### Important

From versions >= 3.x of this package MUI v5 is in use. Versions of 1 & 2 using Material-UI v4

From version >= 6 x-date-pickers version 6 is in use. Make sure you upgrade your dependencies.

### Simple form setup

```tsx
import {FormContainer, TextFieldElement} from 'react-hook-form-mui'

function Form() {
    return (
        <FormContainer
            defaultValues={{name: ''}}
            onSuccess={data => console.log(data)}
        >
            <TextFieldElement name="name" label="Name" required/>
        </FormContainer>
    )
}
```

### Typesafe form setup

```tsx
  function Form() {
    const {control, handleSubmit} = useForm({
      defaultValues: {
        name: '',
        auto: '',
        check: false
      },
    })
    const options = [
      {id: 'one', label: 'One'},
      {id: 'two', label: 'Two'},
      {id: 'three', label: 'Three'},
    ]
    return (
        <form onSubmit={handleSubmit((data) => console.log(data))} noValidate>
          <Stack spacing={2}>
            <TextFieldElement
              name={'name'}
              label={'Name'}
              control={control}
              required
              fullWidth
            />
            <AutocompleteElement
              name={'auto'}
              label={'Autocomplete'}
              control={control}
              options={options}
            />
            <CheckboxElement name={'check'} label={'Check'} control={control} />
            <Button type={'submit'} color={'primary'}>
              Submit
            </Button>
          </Stack>
        </form>
    )
  }
```

You can have a look at all different possibilities to use forms at following [`code examples`](apps/storybook/stories/FormContainer.stories.tsx)

### FormContainer creates `formContext`

The `<FormContainer />` wires up a form and you can create sub-components which either make use
of `useFormContext() | useWatch()` to react to form values.

## Demo

Check out Storybook: [Demo](https://react-hook-form-material-ui.vercel.app)

You will find examples and use cases.

### With Datepicker

If you are using the `DatepickerElement` keep in mind that you have to wrap your form with a provider:

Examples for Dayjs or DateFns provider (used in the demo):

* [DateFns](/packages/rhf-mui/src/DateFnsProvider.tsx)
* [Dayjs](/packages/rhf-mui/src/DateFnsProvider.tsx)

### Troubleshooting

#### Issues if context is undefined (useWatch)

For convenient reasons this package is re-exporting `react-hook-form` which is especially required if you have context
issues of React.

```tsx
import {useWatch} from 'react-hook-form-mui' // instead of react-hook-form

const MySubmit = () => {
    const value = useWatch('fieldName')
    return (
        <Button disabled={!value}>Submit</Button>
    )
}
```

### Bundle

This project uses `tsup` to wrap the package for `npm`.


### Support Maintanance
If you find this package useful consider a small contribution:
[Buy Me A Coffee](https://www.buymeacoffee.com/dohomi)

### Contributing

Make sure you're running Node.js 20

1. Clone this repository

```bash
git clone https://github.com/dohomi/react-hook-form-mui.git
cd react-hook-form-mui
```

2. Install dependencies

```bash
yarn
```

3. Build the project

```bash
yarn build
```

4. Run the storybook

```bash
yarn sb-start
```

Changes to storybook stories can be made in `apps/storybook/stories`. Changes to the library can be made in `packages/rhf-mui`.