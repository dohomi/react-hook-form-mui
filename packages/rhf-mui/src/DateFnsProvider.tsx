import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import {
  LocalizationProvider,
  LocalizationProviderProps,
  MuiPickersAdapter,
} from '@mui/x-date-pickers'

export type DateFnsProviderProps<TDate> = Omit<
  LocalizationProviderProps<TDate, any>,
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
