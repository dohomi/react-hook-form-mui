import { FC } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider, LocalizationProviderProps } from '@mui/x-date-pickers/LocalizationProvider'


export type DateFnsProviderProps = FC<Omit<LocalizationProviderProps, 'dateAdapter'>>

const DateFnsProvider: DateFnsProviderProps = ({
  children,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} {...props}>
      {children}
    </LocalizationProvider>
  )
}
export default DateFnsProvider
