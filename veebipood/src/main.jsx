import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './i18n'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
// Kui on ./ või ../ on meie fail
// Ilma selleta on node_modules fail

// Navigeerimiseks. URL vahetuseks:
// 1. npm install react-router-dom (paneme koodijupid node_modules kausta)
// 2. import BrowseRouter (võtame node_modules kaustast kasutusele)
// 3. ümbritseme <App/> BrowserRouteriga (alates App.jsx tasemest tuleb navigeerimise võimekus)
// 4. App.jsx failis teeme URL ja HTML seoseid

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
