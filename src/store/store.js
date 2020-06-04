import { createStore } from 'redux'
import { rootReducer } from 'store/reducers/root.reducer'

export const store = createStore(
  rootReducer,
  // window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)

if (module.hot) {
  module.hot.accept('store/reducers/root.reducer', () =>
    store.replaceReducer(rootReducer)
  )
}
