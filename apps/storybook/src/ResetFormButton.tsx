import { Button } from '@mui/material'
import { useFormContext } from 'react-hook-form'

export default function ResetFormButton() {
  const { reset } = useFormContext()
  return (
    <Button onClick={() => {
      reset({})
    }
    }>Reset</Button>
  )
}
