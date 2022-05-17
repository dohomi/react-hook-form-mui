import { FC } from 'react'
import { Box, Button } from '@mui/material'

export const BoxMargin: FC = ({ children }) => {
  return (
    <Box sx={{
      marginY: 2
    }}>{children}</Box>
  )
}
export const SubmitButton: FC = () => {
  return <Button type={'submit'} color={'primary'}> Submit</Button>
}
