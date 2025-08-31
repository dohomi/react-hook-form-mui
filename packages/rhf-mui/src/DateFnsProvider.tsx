import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import {
  LocalizationProvider,
  LocalizationProviderProps,
  MuiPickersAdapter,
} from '@mui/x-date-pickers'
import {Locale} from 'date-fns/locale'

export type DateFnsProviderProps<TDate extends Date> =
  | (Omit<LocalizationProviderProps<TDate>, 'dateAdapter'> & {
      dateAdapter?: new (..._args: any) => MuiPickersAdapter<TDate>
    })
  | (Omit<LocalizationProviderProps<TDate>, 'adapterLocale'> & {
      adapterLocale: Locale
    })

export function DateFnsProvider({
  children,
  ...props
}: DateFnsProviderProps<Date>) {
  return (
    <LocalizationProvider
      {...('dateAdapter' in props
        ? {
            dateAdapter: props.dateAdapter,
          }
        : {
            adapterLocale: props.adapterLocale,
            dateAdapter: AdapterDateFns,
          })}
      {...props}
    >
      {children}
    </LocalizationProvider>
  )
}
