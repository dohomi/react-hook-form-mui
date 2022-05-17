import { FC } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider, { LocalizationProviderProps } from '@mui/lab/LocalizationProvider'

export type DateFnsProviderProps = FC<Omit<LocalizationProviderProps, 'dateAdapter'> & {
  utils?: any
}>

const DateFnsProvider: DateFnsProviderProps = ({
  children,
  utils,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} {...props}>
      {children}
    </LocalizationProvider>
  )
}
export default DateFnsProvider
