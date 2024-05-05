import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFnsV3'
import {
  LocalizationProvider,
  LocalizationProviderProps,
  MuiPickersAdapter,
} from '@mui/x-date-pickers'

export type DateFnsProviderProps<TDate extends Date> = Omit<
  LocalizationProviderProps<TDate, any>,
  'dateAdapter'
> & {
  dateAdapter?: new (..._args: any) => MuiPickersAdapter<TDate>
}

export function DateFnsProvider({
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
