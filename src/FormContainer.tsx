import React, { FormHTMLAttributes, FunctionComponent } from 'react'
import { FormContext, FormContextValues, OnSubmit, useForm } from 'react-hook-form'

export type FormContainerProps = {
  defaultValues?: any
  onSuccess?: OnSubmit<any>
  handleSubmit?: Function
  formContext?: FormContextValues<any>
  FormProps?: FormHTMLAttributes<HTMLFormElement>
}

const FormContainerCore: FunctionComponent<FormContainerProps> = ({
  defaultValues = {},
  onSuccess = () => {
  },
  FormProps,
  children
}) => {
  const methods = useForm<typeof defaultValues>({
    defaultValues
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

export const FormContainer: FunctionComponent<FormContainerProps> = props => {
  if (!props.formContext && !props.handleSubmit) {
    return <FormContainerCore {...props} />
  } else if (props.handleSubmit && props.formContext) {
    const onSubmit = props.handleSubmit
    return (
      <FormContext {...props.formContext as FormContextValues}>
        <form
          noValidate
          {...props.FormProps}
          onSubmit={onSubmit as any}>
          {props.children}
        </form>
      </FormContext>
    )
  }
  if (props.formContext && props.onSuccess) {
    return (
      <FormContext {...props.formContext as FormContextValues}>
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

  return (
    <div>
      Incomplete setup of FormContainer..
    </div>
  )
}
