import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from 'store/store'
import { GlobalStyle } from 'core/theme/globalStyle'
import { Theme as ThemeProvider } from 'core/theme/theme'
import { App } from 'App'

ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
)
