import React, { MouseEvent, useState } from 'react'
import TextFieldElement, { TextFieldElementProps } from './TextFieldElement'
import InputAdornment from '@material-ui/core/InputAdornment'
import { IconButton } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

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
