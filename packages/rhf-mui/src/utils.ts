import {usePickerAdapter, type PickerValidDate} from '@mui/x-date-pickers'

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
  adapter: ReturnType<typeof usePickerAdapter>,
  value: TDate
): string | null {
  return value == null || !adapter.isValid(value as unknown as Date)
    ? null
    : adapter.getTimezone(value as unknown as Date)
}

export function readValueAsDate<TDate extends PickerValidDate>(
  adapter: ReturnType<typeof usePickerAdapter>,
  value: string | null | TDate
): TDate | null {
  if (typeof value === 'string') {
    if (value === '') {
      return null
    }
    return adapter.date(value) as TDate
  }
  return value
}
