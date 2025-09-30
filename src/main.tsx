import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'

import { ToastProvider } from '@components'

import App from './App.tsx'

async function enableMocking() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('@mocks/browser')
    return worker.start()
  }
}

const queryClient = new QueryClient()

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <ToastProvider />
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>
  )
})
