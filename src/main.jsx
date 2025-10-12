import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Clock from './Clock.jsx'
import Memo from './Memo.jsx'
import Transition from './Transition.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Clock />
    <Memo />
    <Transition />
  </StrictMode>,
)
