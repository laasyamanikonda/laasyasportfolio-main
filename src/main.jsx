import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '/src/index.css'
import App from '/src/components/App.jsx'
// calls App.jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
  