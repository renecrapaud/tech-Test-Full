import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const pedidos = [

]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App pedidos={pedidos}/>
  </StrictMode>,
)
