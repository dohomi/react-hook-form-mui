import React, { FormHTMLAttributes, FunctionComponent, PropsWithChildren } from 'react'
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form'

export type FormContainerProps = PropsWithChildren<{
  defaultValues?: any
  onSuccess?: (values: any) => void
  handleSubmit?: (values: any) => void
  formContext?: UseFormReturn<any>
  FormProps?: FormHTMLAttributes<HTMLFormElement>
}>

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
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSuccess)} noValidate {...FormProps}>
        {children}
      </form>
    </FormProvider>
  )
}
const FormContainer: FunctionComponent<FormContainerProps> = props => {
  if (!props.formContext && !props.handleSubmit) {
    return <FormContainerCore {...props} />
  } else if (props.handleSubmit && props.formContext) {
    return (
      <FormProvider {...props.formContext}>
        <form
          noValidate
          {...props.FormProps}
          onSubmit={props.handleSubmit}>
          {props.children}
        </form>
      </FormProvider>
    )
  }
  if (props.formContext && props.onSuccess) {
    return (
      <FormProvider {...props.formContext}>
        <form
          onSubmit={props.formContext.handleSubmit(props.onSuccess)}
          noValidate
          {...props.FormProps}
        >
          {props.children}
        </form>
      </FormProvider>
    )
  }

  return (
    <div>
      Incomplete setup of FormContainer..
    </div>
  )
}

export default FormContainer
