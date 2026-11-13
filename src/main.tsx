import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { ScanStoreProvider } from './lib/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <ScanStoreProvider>
          <App />
        </ScanStoreProvider>
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
