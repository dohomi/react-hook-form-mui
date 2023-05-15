import {Suspense} from 'react'
import {Preview} from '@storybook/react'
// @ts-ignore
import createEmotionCache from '../../nextjs/src/createEmotionCache'
import {CacheProvider} from '@emotion/react'
// @ts-ignore
import theme from '../../nextjs/src/theme'
import {ThemeProvider} from '@mui/material'
import {DateFnsProvider} from 'react-hook-form-mui/src/date-fns'

const clientSideEmotionCache = createEmotionCache()

const preview: Preview = {
  decorators: [
    (Story) => (
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <DateFnsProvider>
            <Suspense fallback={<div>loading</div>}>
              <Story />
            </Suspense>
          </DateFnsProvider>
        </ThemeProvider>
      </CacheProvider>
    ),
  ],
}
