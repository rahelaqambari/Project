import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='text-4xl p-4 text-center'>In The Name Of (<span className='font-serif animate-pulse bg-gradient-to-t  from-blue-700 to-green-700 via-red-700 text-transparent bg-clip-text'>Allah</span>)</h1>
    <p className='text-sm w-6xl flex items-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis enim, iste ad id eligendi deleniti veritatis inventore vel maiores officia eum est corrupti cupiditate optio nam dolor asperiores tempore aut.</p>
    <App />
  </StrictMode>,
)
