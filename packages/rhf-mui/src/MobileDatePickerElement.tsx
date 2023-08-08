import {
  MobileDatePicker,
  MobileDatePickerProps,
  MobileDatePickerSlotsComponentsProps,
} from '@mui/x-date-pickers/MobileDatePicker'
import {
  Control,
  Controller,
  ControllerProps,
  FieldError,
  Path,
} from 'react-hook-form'
import {TextFieldProps} from '@mui/material'
import {FieldValues} from 'react-hook-form/dist/types/fields'
import {useFormError} from './FormErrorProvider'
import {ReactNode} from 'react'

export type MobileDatePickerElementProps<
  T extends FieldValues,
  TInputDate,
  TDate = TInputDate
> = Omit<MobileDatePickerProps<TDate>, 'value' | 'slotProps'> & {
  name: Path<T>
  required?: boolean
  isDate?: boolean
  parseError?: (error: FieldError) => ReactNode
  validation?: ControllerProps<T>['rules']
  control?: Control<T>
  inputProps?: TextFieldProps
  helperText?: TextFieldProps['helperText']
  slotProps?: Omit<MobileDatePickerSlotsComponentsProps<TDate>, 'textField'>
}

export default function MobileDatePickerElement<
  TFieldValues extends FieldValues
>({
  parseError,
  name,
  required,
  validation = {},
  inputProps,
  control,
  slotProps,
  ...rest
}: MobileDatePickerElementProps<TFieldValues, any, any>): JSX.Element {
  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn
  if (required && !validation.required) {
    validation.required = 'This field is required'
  }

  return (
    <Controller
      name={name}
      rules={validation}
      control={control}
      defaultValue={null as any}
      render={({field, fieldState: {error}}) => {
        if (field?.value && typeof field?.value === 'string') {
          field.value = new Date(field.value) as any // need to see if this works for all localization adaptors
        }

        return (
          <MobileDatePicker
            {...rest}
            {...field}
            ref={(r) => {
              field.ref(r?.querySelector('input'))
            }}
            onClose={(...args) => {
              field.onBlur()
              if (rest.onClose) {
                rest.onClose(...args)
              }
            }}
            onChange={(v, keyboardInputValue) => {
              // console.log(v, keyboardInputValue)
              field.onChange(v, keyboardInputValue)
              if (typeof rest.onChange === 'function') {
                rest.onChange(v, keyboardInputValue)
              }
            }}
            slotProps={{
              ...slotProps,
              textField: {
                ...inputProps,
                required,
                error: !!error,
                helperText: error
                  ? typeof customErrorFn === 'function'
                    ? customErrorFn(error)
                    : error.message
                  : inputProps?.helperText || rest.helperText,
              },
            }}
          />
        )
      }}
    />
  )
}
