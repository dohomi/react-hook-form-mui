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

export function getTimezone<TDate>(
  adapter: ReturnType<typeof useLocalizationContext>,
  value: TDate
): string | null {
  return value == null || !adapter.utils.isValid(value as unknown as Date)
    ? null
    : adapter.utils.getTimezone(value as unknown as Date)
}
