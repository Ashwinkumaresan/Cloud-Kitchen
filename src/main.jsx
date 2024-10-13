import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navbar } from './Components/Navbar.jsx'
import { Home } from './Components/Home.jsx'
import { Sign_in_kitchen } from './Components/Sign_in_kitchen.jsx'
import { Kitchen_page } from './Components/Kitchen_page.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Kitchen_page /> */}
    {/* <Navbar />
    <Home />
    <Sign_in_kitchen /> */}

    
  </StrictMode>,
)
