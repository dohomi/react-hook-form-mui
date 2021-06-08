import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React, { FC } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProviderProps } from '@material-ui/pickers/MuiPickersUtilsProvider'

class LocalizedUtils extends DateFnsUtils {
  dateFormat = 'P'
}

export type DateFnsProviderProps = FC<
  Omit<MuiPickersUtilsProviderProps, 'utils'> & {
  utils?: any
}
  >

const DateFnsProvider: DateFnsProviderProps = ({
  children,
  utils,
  ...props
}) => {
  return (
    <MuiPickersUtilsProvider {...props} utils={utils || LocalizedUtils}>
      {children}
    </MuiPickersUtilsProvider>
  )
}
export default DateFnsProvider
