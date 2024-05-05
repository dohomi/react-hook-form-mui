import {
  FieldPath,
  FieldValues,
  PathValue,
  UseControllerReturn,
} from 'react-hook-form'

export type UseTransformOptions<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
> = {
  value: UseControllerReturn<TFieldValues, TName>['field']['value']
  onChange: UseControllerReturn<TFieldValues, TName>['field']['onChange']
  transform?: {
    input?: (value: PathValue<TFieldValues, TName>) => TValue
    output?: (...event: any[]) => PathValue<TFieldValues, TName>
  }
}

export type UseTransformReturn<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
> = {
  value: TValue
  onChange: UseControllerReturn<TFieldValues, TName>['field']['onChange']
}

export function useTransform<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
  TValue = unknown,
>(
  options: UseTransformOptions<TFieldValues, TName, TValue>
): UseTransformReturn<TFieldValues, TName, TValue> {
  const value =
    typeof options.transform?.input === 'function'
      ? options.transform.input(options.value)
      : options.value

  const onChange = (...event): void => {
    if (typeof options.transform?.output === 'function') {
      options.onChange(options.transform.output(...event))
    } else {
      options.onChange(...event)
    }
  }

  return {
    value,
    onChange,
  }
}
