# Material-UI and react-hook-form combined
## About this project

This project simplifies the use of `react-hook-form` and `Material-UI`. It provides opinionated use cases with following
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

The components are written in TypeScript and attempt an easy integration.

## How to use it

### Installation
```
   $npm install react-hook-form react-hook-form-mui
```
The dependency of `react-hook-form` is a peerDependency so don't forget to install it as well.

### Your component code

```
import {FormContainer, TextFieldElement} from 'react-hook-form-mui'

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

You can have a look at the `example` folder which sets up NextJS with `react-hook-form-mui`

## Demo

Check out Storybook: [Demo](https://react-hook-form-material-ui.vercel.app)

You will find examples and use cases.

### Bundle

This project uses `microbundle` and multiple entries for bundling. 

### License

[MIT](./LICENSE)

### Changelog
* 2.x Rename package to react-
