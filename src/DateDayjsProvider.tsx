import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import React, { FC } from 'react'
import DateFnsUtils from '@date-io/dayjs'
import { MuiPickersUtilsProviderProps } from '@material-ui/pickers/MuiPickersUtilsProvider'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)

class LocalizedUtils extends DateFnsUtils {
  dateFormat = 'L'
}

export type DateFnsProviderProps = FC<Omit<MuiPickersUtilsProviderProps, 'utils'> & {
  utils?: any
}>

const DateDayjsProvider: DateFnsProviderProps = ({ children, utils, ...props }) => {
  return (
    <MuiPickersUtilsProvider
      {...props}
      utils={utils || LocalizedUtils}
    >{children}</MuiPickersUtilsProvider>
  )
}
export default DateDayjsProvider
