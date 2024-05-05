import {DateTimeValidationError} from '@mui/x-date-pickers'

export const defaultErrorMessages: {
  [v in NonNullable<DateTimeValidationError>]: string
} = {
  disableFuture: 'Date must be in the past',
  maxDate: 'Date is later than the maximum allowed date',
  disablePast: 'Past date is not allowed',
  invalidDate: 'Date is invalid',
  minDate: 'Date is earlier than the minimum allowed date',
  shouldDisableDate: 'Date is not allowed',
  shouldDisableMonth: 'Month is not allowed',
  shouldDisableYear: 'Year is not allowed',
  minTime: 'Time is earlier than the minimum allowed',
  maxTime: 'Time is later than the maximum allowed',
  'shouldDisableTime-hours': 'Specified hour is disabled',
  'shouldDisableTime-minutes': 'Specified minute is disabled',
  'shouldDisableTime-seconds': 'Specified second is disabled',
  minutesStep: 'Invalid minutes step',
}
