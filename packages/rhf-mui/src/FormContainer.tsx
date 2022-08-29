import {BaseSyntheticEvent, FormHTMLAttributes, PropsWithChildren} from 'react'
import {FormProvider, SubmitHandler, useForm, UseFormProps, UseFormReturn} from 'react-hook-form'
import {FieldValues} from 'react-hook-form/dist/types/fields'

export type FormContainerProps<T extends FieldValues = FieldValues> = PropsWithChildren<UseFormProps<T> & {
    onSuccess?: SubmitHandler<T>
    FormProps?: FormHTMLAttributes<HTMLFormElement>
    handleSubmit?: (e: BaseSyntheticEvent<T>) => Promise<void> | void
    formContext?: UseFormReturn<T>
}>

export default function FormContainer<TFieldValues extends FieldValues = FieldValues>({
                                                                                          handleSubmit,
                                                                                          children,
                                                                                          FormProps,
                                                                                          formContext,
                                                                                          onSuccess,
                                                                                          ...useFormProps
                                                                                      }: PropsWithChildren<FormContainerProps<TFieldValues>>) {
    if (!formContext) {
        const methods = useForm<TFieldValues>({
            ...useFormProps
        })
        const {handleSubmit} = methods

        return (
            <FormProvider {...methods}>
                <form
                    onSubmit={handleSubmit(onSuccess ? onSuccess : () => console.log('submit handler \'onSubmit\' is missing'))}
                    noValidate {...FormProps}>
                    {children}
                </form>
            </FormProvider>
        )
    }
    if (typeof onSuccess === 'function' && typeof handleSubmit === 'function') {
        console.warn('Property "onSuccess will be ignored because handleSubmit is provided"')
    }
    return (
        <FormProvider {...formContext}>
            <form
                noValidate
                {...FormProps}
                // @ts-ignore
                onSubmit={
                    handleSubmit
                        ? handleSubmit
                        : onSuccess
                            ? formContext.handleSubmit(onSuccess)
                            : () => console.log('submit handler is missing')
                }>
                {children}
            </form>
        </FormProvider>
    )
}

