import '@ui5/webcomponents-icons/dist/AllIcons'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@ui5/webcomponents-react'
import { App } from './pages/App'

import './styles/global.scss'
import { store } from './store'

const rootElement = document.getElementById('root') as HTMLElement
const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
