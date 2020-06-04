import React, { Suspense } from 'react'

import { AppContainer } from 'pages/App.container'

export const App = () => {
  return (
    <Suspense fallback={null}>
      <AppContainer />
    </Suspense>
  )
}
