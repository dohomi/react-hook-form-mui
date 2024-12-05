import {type PickerValidDate} from '@mui/x-date-pickers'
import {useLocalizationContext} from '@mui/x-date-pickers/internals'

export function propertyExists<X, Y extends PropertyKey>(
  obj: X,
  prop: Y
): obj is X & Record<Y, unknown> {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    Object.prototype.hasOwnProperty.call(obj, prop)
  )
}

export function getTimezone<TDate extends PickerValidDate>(
  adapter: ReturnType<typeof useLocalizationContext>,
  value: TDate
): string | null {
  return value == null || !adapter.utils.isValid(value as unknown as Date)
    ? null
    : adapter.utils.getTimezone(value as unknown as Date)
}

export function readValueAsDate<TDate extends PickerValidDate>(
  adapter: ReturnType<typeof useLocalizationContext>,
  value: string | null | TDate
): TDate | null {
  if (typeof value === 'string') {
    if (value === '') {
      return null
    }
    return adapter.utils.date(value) as TDate
  }
  return value
}
