import React from 'react'
import ReactDOM from 'react-dom/client'

import { DarkModeProvider } from './hooks/useDarkMode.tsx'
import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
)
