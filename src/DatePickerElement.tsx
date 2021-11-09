import React from 'react'
import DatePicker, { DatePickerProps } from '@mui/lab/DatePicker'
import { Controller, ControllerProps, FieldError } from 'react-hook-form'
// import { MaterialUiPickersDate } from '@mui/lab/typings/date'
import { TextField, TextFieldProps } from '@mui/material'
import { ParseableDate } from '@mui/lab/internal/pickers/constants/prop-types'

export type DatePickerElementProps<TDate = unknown> = Omit<DatePickerProps, 'value' | 'onChange'> & {
		name: string
		helperText?: string
		required?: boolean
		isDate?: boolean
		inputProps?: TextFieldProps
		parseError?: (error: FieldError) => string
		onChange?: (value?: ParseableDate<TDate>) => void
		validation?: ControllerProps['rules']
		parseDate?: (date: ParseableDate<TDate>) => string
		onBlur?(event: any): void
}

export default function DatePickerElement({
		label: string,
		isDate,
		parseError,
		name,
		required,
		parseDate,
		label,
		helperText,
		inputProps = {},
		validation = {},
		...rest
}: DatePickerElementProps): JSX.Element {

		if (required) {
				validation.required = 'This field is required'
		}

		return (
				<Controller
				name={name}
				rules={validation}
				render={({ field: { onBlur, onChange, value }, fieldState: { error, invalid } }) =>
						<DatePicker
						{...rest}
						value={value}
						onChange={(date: ParseableDate<any>) => {
								let parsedDate = date?.toISOString().substr(0, 10)
								if (typeof parseDate === 'function') {
										parsedDate = parseDate(date)
								}
								onChange(parsedDate)
								if (typeof rest.onChange === 'function') {
										rest.onChange(parsedDate)
								}
						}}
						renderInput={
						(params) =>
								<TextField
								{...params}
								{...inputProps}
										required={!!required}
								onBlur={(ev) => {
										onBlur()
										if (typeof rest.onBlur === 'function') {
												rest.onBlur(ev)
										}
								}}
								error={invalid}
								helperText={
								error
								? (typeof parseError === 'function' ? parseError(error) : error.message)
								: inputProps.helperText
								}
								/>
						}
						/>
				}
				/>
		)
}
