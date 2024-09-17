import ReactDOM from 'react-dom/client'
import './style/App.scss'
import { Router } from './router'
import { techwork } from './functions/GiveConst'
import { Techwork } from './pages/main/Techwork'

if (techwork) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <Techwork />
  )
} else {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <Router />
    // </React.StrictMode>,
  )
}
