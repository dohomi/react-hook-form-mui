import {
  Control,
  FieldError,
  FieldPath,
  UseControllerProps,
  useController,
  FieldValues,
} from 'react-hook-form'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  ToggleButtonProps,
} from '@mui/material'
import {ReactNode} from 'react'
import {useFormError} from './FormErrorProvider'

type SingleToggleButtonProps = Omit<ToggleButtonProps, 'value' | 'children'> & {
  id: number | string
  label: ReactNode
}

export type ToggleButtonGroupElementProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = ToggleButtonGroupProps & {
  required?: boolean
  label?: string
  validation?: UseControllerProps<TFieldValues, TName>['rules']
  name: TName
  parseError?: (error: FieldError) => ReactNode
  control?: Control<TFieldValues>
  options: SingleToggleButtonProps[]
  formLabelProps?: FormLabelProps
  helperText?: string
  enforceAtLeastOneSelected?: boolean
}

export default function ToggleButtonGroupElement<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(props: ToggleButtonGroupElementProps<TFieldValues, TName>) {
  const {
    name,
    control,
    label,
    validation = {},
    required,
    options = [],
    parseError,
    helperText,
    formLabelProps,
    enforceAtLeastOneSelected = false,
    exclusive,
    ...toggleButtonGroupProps
  } = props
  const errorMsgFn = useFormError()
  const customErrorFn = parseError || errorMsgFn

  const rules = {
    ...validation,
    ...(required &&
      !validation.required && {
      validation: 'This field is required',
    }),
  }

  const isRequired = required || !!validation?.required

  const {
    field,
    fieldState: {error},
  } = useController({
    name,
    control,
    rules,
  })

  const renderHelperText = error
    ? typeof customErrorFn === 'function'
      ? customErrorFn(error)
      : error.message
    : helperText

  return (
    <FormControl
      error={!!error}
      required={isRequired}
      fullWidth={toggleButtonGroupProps?.fullWidth}
    >
      {label && (
        <FormLabel
          {...formLabelProps}
          error={!!error}
          required={isRequired}
          sx={{mb: 1, ...formLabelProps?.sx}}
        >
          {label}
        </FormLabel>
      )}
      <ToggleButtonGroup
        {...toggleButtonGroupProps}
        exclusive={exclusive}
        value={field.value}
        onBlur={field.onBlur}
        onChange={(event, val) => {
          if (enforceAtLeastOneSelected) {
            // don't allow unselecting the last item
            if (exclusive && val === null) return
            if (!exclusive && val.length === 0) return
          }
          field.onChange(val)
          if (typeof toggleButtonGroupProps.onChange === 'function') {
            toggleButtonGroupProps.onChange(event, val)
          }
        }}
      >
        {options.map(({label, id, ...toggleProps}) => (
          <ToggleButton value={id} {...toggleProps} key={id}>
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      {renderHelperText && <FormHelperText>{renderHelperText}</FormHelperText>}
    </FormControl>
  )
}
