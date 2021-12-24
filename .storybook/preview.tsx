import React, { Suspense } from 'react'
import { addParameters, Story } from '@storybook/react'
// @ts-ignore
import createEmotionCache from '../example/src/createEmotionCache'
import { CacheProvider } from '@emotion/react'
// @ts-ignore
import theme from '../example/src/theme'
import { ThemeProvider } from '@mui/material'

addParameters({
  options: {
    storySort: (a: any, b: any) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
})

const clientSideEmotionCache = createEmotionCache()

export const decorators = [(Story: Story) => (
  <CacheProvider value={clientSideEmotionCache}>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>loading</div>}><Story /></Suspense>
    </ThemeProvider>
  </CacheProvider>
)]
