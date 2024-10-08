import ReactDOM from 'react-dom/client'
import './style/App.scss'
import { Router } from './router'
import { techwork } from './functions/GiveConst'
import { Techwork } from './pages/main/techwork'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

if (techwork) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Techwork />
  )
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
    // </React.StrictMode>,
  )
}
