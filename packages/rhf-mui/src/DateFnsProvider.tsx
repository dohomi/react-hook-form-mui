import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import {
  LocalizationProvider,
  LocalizationProviderProps,
} from '@mui/x-date-pickers'
import {MuiPickersAdapter} from '@mui/x-date-pickers/internals/models'

export type DateFnsProviderProps<TDate> = Omit<
  LocalizationProviderProps<TDate>,
  'dateAdapter'
> & {
  dateAdapter?: new (...args: any) => MuiPickersAdapter<TDate>
}

export default function DateFnsProvider({
  children,
  ...props
}: DateFnsProviderProps<Date>) {
  const {dateAdapter, ...localizationProps} = props
  return (
    <LocalizationProvider
      dateAdapter={dateAdapter || AdapterDateFns}
      {...localizationProps}
    >
      {children}
    </LocalizationProvider>
  )
}
