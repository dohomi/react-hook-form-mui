## About this project

This project simplifies the use of `react-form-hook` and `Material-UI`. It provides opinionated use cases with following
components:

* FormContainer
* TextFieldElement
* SelectElement
* MultiSelectElement
* RadioButtonGroup
* CheckboxButtonGroup
* CheckboxElement
* PasswordElement
* DatePickerElement
* DateFnsProvider

The components are written in TypeScript and attempt an easy integration.

## How to use it

```
import FormContainer from 'react-form-hook-mui/FormContainer'
import TextFieldElement from 'react-form-hook-mui/TextFieldElement'

function Form(){
  return (
    <FormContainer 
      defaultValues={{name: ''}}
      onSuccess={(data) => {console.log(data)}}
    >
      <TextFieldElement name="name" label="Name" required/>
    </FormContainer>
  )
}
```

You can have a look at the `example` folder which sets up NextJS with `react-form-hook-mui`

## Demo

Check out Storybook: [Demo](https://react-hook-form-material-ui.now.sh/)

You will find examples and use cases.

### Bundle

This project uses `preconstruct` and multiple entries for bundling. To improve code splitting always import
from `react-form-hook-mui/[MuiComponent]`.

If you know that all components are in use you can import from `react-form-hook-mui` directly but its not recommended.

### License

[MIT](./LICENSE)
