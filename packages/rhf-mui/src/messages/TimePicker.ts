import {TimeValidationError} from '@mui/x-date-pickers'

export const defaultErrorMessages: {
  [v in NonNullable<TimeValidationError>]: string
} = {
  invalidDate: 'Time is invalid',
  minTime: 'Time is earlier than the minimum allowed',
  maxTime: 'Time is later than the maximum allowed',
  disableFuture: 'Future time is disabled',
  disablePast: 'Past time is disabled',
  'shouldDisableTime-hours': 'Specified hour is disabled',
  'shouldDisableTime-minutes': 'Specified minute is disabled',
  'shouldDisableTime-seconds': 'Specified second is disabled',
  'shouldDisableClock-hours': 'Specified hour on the clock is disabled',
  'shouldDisableClock-minutes': 'Specified minute on the clock is disabled',
  'shouldDisableClock-seconds': 'Specified second on the clock is disabled',
  minutesStep: 'Invalid minutes step',
}
