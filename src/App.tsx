import ReactDOM from 'react-dom/client'
import './App.scss'
import { Router } from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Router />
  // </React.StrictMode>,
)
