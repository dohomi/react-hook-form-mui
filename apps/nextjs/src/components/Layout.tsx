import {FunctionComponent, PropsWithChildren} from 'react'
import {AppBar, Box, Button, Toolbar} from '@mui/material'
import Link from 'next/link'

export const Layout: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Link href={'/'} passHref legacyBehavior>
            <Button color={'inherit'}>Base</Button>
          </Link>
          <Link href={'/withSub'} passHref legacyBehavior>
            <Button color={'inherit'}>With useWatch</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box padding={3}>{children}</Box>
    </Box>
  )
}
