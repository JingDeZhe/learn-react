import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './router'
import store from './stores'
import { Provider as StoreProvider } from 'react-redux'

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser.js').then(({ worker }) => {
    worker.start({
      onUnhandledRequest: 'bypass',
    })
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
)
