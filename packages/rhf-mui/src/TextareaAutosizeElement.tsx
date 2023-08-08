import {TextareaAutosize, TextField, TextFieldProps} from '@mui/material'
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form'
import {FieldValues} from 'react-hook-form/dist/types/fields'
import {CSSProperties, ReactNode} from 'react'
import {useFormError} from './FormErrorProvider'

export type TextareaAutosizeElementProps<T extends FieldValues = FieldValues> =
  Omit<TextFieldProps, 'name' | 'type'> & {
    validation?: ControllerProps<T>['rules']
    name: Path<T>
    parseError?: (error: FieldError) => ReactNode
    control?: Control<T>
    resizeStyle?: CSSProperties['resize']
  }

export default function TextareaAutosizeElement<
  TFieldValues extends FieldValues = FieldValues
>({
  validation = {},
  parseError,
  required,
  name,
  control,
  rows,
  resizeStyle,
  ...rest
}: TextareaAutosizeElementProps<TFieldValues>): JSX.Element {
  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
  if (required && !validation.required) {
    validation.required = 'This field is required'
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
          value={value ?? ''}
          onChange={(ev) => {
            onChange(ev.target.value)
            if (typeof rest.onChange === 'function') {
              rest.onChange(ev)
            }
          }}
          onBlur={onBlur}
          required={required}
          error={!!error}
          helperText={
            error
              ? typeof customErrorFn === 'function'
                ? customErrorFn(error)
                : error.message
              : rest.helperText
          }
          inputRef={ref}
          multiline
          InputProps={{
            inputComponent: TextareaAutosize,
            inputProps: {
              minRows: rows,
              style: {
                resize: resizeStyle || 'both',
              },
            },
          }}
        />
      )}
    />
  )
}
