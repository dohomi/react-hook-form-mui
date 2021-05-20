import React, { Suspense } from 'react'
import { addParameters, Story } from '@storybook/react'

addParameters({
  options: {
    storySort: (a: any, b: any) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
})

export const decorators = [(Story: Story) => (
  <Suspense fallback={<div>loading</div>}><Story /></Suspense>
)]
