import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import {
  LocalizationProvider,
  LocalizationProviderProps,
} from '@mui/x-date-pickers'

export type DateFnsProviderProps = Omit<
  LocalizationProviderProps,
  'dateAdapter'
> & {
  dateAdapter?: LocalizationProviderProps['dateAdapter']
}

export default function DateFnsProvider({
  children,
  ...props
}: DateFnsProviderProps) {
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
