import React, { MouseEvent, useState } from 'react'
import TextFieldElement, { TextFieldElementProps } from './TextFieldElement'
import { IconButton, InputAdornment } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

export type PasswordElementProps = TextFieldElementProps

export default function PasswordElement(props: PasswordElementProps): JSX.Element {
  const [password, setPassword] = useState<boolean>(true)
  return (
    <TextFieldElement
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position={'end'}>
            <IconButton
              onMouseDown={(e: MouseEvent<HTMLButtonElement>) =>
                e.preventDefault()
              }
              onClick={() => setPassword(!password)}
              tabIndex={-1}
            >
              {password ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
      type={password ? 'password' : 'text'}
    />
  )
}
