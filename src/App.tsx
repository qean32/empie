import ReactDOM from 'react-dom/client'
import './App.scss'
import { Router } from './router'
import { techwork } from './functions/GiveConst'
import { Techwork } from './pages/main/techwork'

if (techwork) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <Techwork />
    // </React.StrictMode>,
  )
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <Router />
    // </React.StrictMode>,
  )
}
