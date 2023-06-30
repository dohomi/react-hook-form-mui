import {TextField, TextFieldProps} from '@mui/material'
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form'
import {FieldValues} from 'react-hook-form/dist/types/fields'
import {useFormError} from './FormErrorProvider'

export type TextFieldElementProps<T extends FieldValues = FieldValues> = Omit<
  TextFieldProps,
  'name'
> & {
  validation?: ControllerProps['rules']
  name: Path<T>
  parseError?: (error: FieldError) => string
  control?: Control<T>
  /**
   * Function to transform the value from the form controller to a boolean that can be used by the MUI TextField component.
   *
   * You probably want to use this prop together with `transformValue`.
   */
  parseValue?: (formDataValue: unknown) => string
  /**
   * Function to transform the input value before sending it to the Form Controller.
   *
   * You probably want to use this prop together with `parseValue`.
   */
  transformValue?: (inputValue: string | number) => unknown
}

const defaultTransform = (value: any): any => value

export default function TextFieldElement<
  TFieldValues extends FieldValues = FieldValues
>({
  validation = {},
  parseError,
  type,
  required,
  name,
  control,
  parseValue = defaultTransform,
  transformValue = defaultTransform,
  ...rest
}: TextFieldElementProps<TFieldValues>): JSX.Element {
  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  if (type === 'email' && !validation.pattern) {
    validation.pattern = {
      value:
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Please enter a valid email address',
    }
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({
        field: {value, onChange, onBlur, ref},
        fieldState: {error},
      }) => (
        <TextField
          {...rest}
          name={name}
          value={parseValue(value) ?? ''}
          onChange={(ev) => {
            onChange(
              transformValue(
                type === 'number' && ev.target.value
                  ? +ev.target.value
                  : ev.target.value
              )
            )
            if (typeof rest.onChange === 'function') {
              rest.onChange(ev)
            }
          }}
          onBlur={onBlur}
          required={required}
          type={type}
          error={!!error}
          helperText={
            error
              ? typeof customErrorFn === 'function'
                ? customErrorFn(error)
                : error.message
              : rest.helperText
          }
          inputRef={ref}
        />
      )}
    />
  )
}
