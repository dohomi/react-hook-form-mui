import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import getNestedValue from './getNestedValue'
import getErrorMessages from './getErrorMessages'

type UseFormValidationProps = {
  required?: boolean
  name: string
  parseError?: Function
}

export default function useFormValidation({
  required,
  name,
  parseError,
}: UseFormValidationProps) {
  const { setValue, formState: { errors }, register, unregister, watch } = useFormContext()
  const vals = watch()
  const formValue: any = getNestedValue(vals, name)

  useEffect(() => {
    if (required) {
      register(name, {
        validate: {
          required: (v: any) =>
            Array.isArray(v) ? !!v.length : !!v || 'required',
        },
      })
    } else {
      register(name)
    }
    return () => {
      unregister(name)
    }
  }, [register, name, required, unregister])
  const errorMessages = getErrorMessages(name, errors, parseError)
  return { formValue, setValue, errorMessages, watch }
}
