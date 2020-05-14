import React, { FormHTMLAttributes, FunctionComponent } from 'react'
import {
  FormContext,
  FormContextValues,
  OnSubmit,
  useForm,
} from 'react-hook-form'

export type FormContainerProps = {
  onSuccess: OnSubmit<Record<string, any>>
  defaultValues?: any
  formContext?: FormContextValues<any>
  FormProps?: FormHTMLAttributes<HTMLFormElement>
}

const FormContainerCore: FunctionComponent<FormContainerProps> = ({
  defaultValues = {},
  onSuccess,
  FormProps,
  children,
}) => {
  const methods = useForm({
    defaultValues,
  })
  const { handleSubmit } = methods

  return (
    <FormContext {...methods}>
      <form onSubmit={handleSubmit(onSuccess)} noValidate {...FormProps}>
        {children}
      </form>
    </FormContext>
  )
}

const FormContainer: FunctionComponent<FormContainerProps> = props => {
  if (!props.formContext) {
    return <FormContainerCore {...props} />
  }
  return (
    <FormContext {...props.formContext}>
      <form
        onSubmit={props.formContext.handleSubmit(props.onSuccess)}
        noValidate
        {...props.FormProps}
      >
        {props.children}
      </form>
    </FormContext>
  )
}

export default FormContainer
