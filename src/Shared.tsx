import React, { FC } from 'react'
import { Box } from '@mui/material'

export const BoxMargin: FC = ({ children }) => {
  return (
    <Box sx={{
      marginY: 2
    }}>{children}</Box>
  )
}
