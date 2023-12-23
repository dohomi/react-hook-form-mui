import {
  FieldPath,
  FieldValues,
  PathValue,
  UseControllerReturn,
} from 'react-hook-form'

export type UseTransformOptions<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  value: UseControllerReturn<TFieldValues, TName>['field']['value']
  onChange: UseControllerReturn<TFieldValues, TName>['field']['onChange']
  transform?: {
    input?: (
      value: PathValue<TFieldValues, TName>
    ) => PathValue<TFieldValues, TName>
    output?: (...event: any[]) => PathValue<TFieldValues, TName>
  }
}

export type UseTransformReturn<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  value: UseControllerReturn<TFieldValues, TName>['field']['value']
  onChange: UseControllerReturn<TFieldValues, TName>['field']['onChange']
}

export default function useTransform<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(options: UseTransformOptions<TFieldValues, TName>): UseTransformReturn {
  const value =
    typeof options.transform?.input === 'function'
      ? options.transform.input(options.value)
      : options.value

  const onChange = (...event: any[]): void => {
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
