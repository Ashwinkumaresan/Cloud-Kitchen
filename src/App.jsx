import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './Components/Home'
import { Navbar } from './Components/Navbar'
import { Sign_in_kitchen } from './Components/Sign_in_kitchen'
import { Kitchen_page } from './Components/Kitchen_page'
import { Kitchen_login } from './Components/Kitchen_login'
import { PlaneBased } from './Components/PlaneBased'

function App() {

  return (

      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ [<Navbar/>, <Home/>, <PlaneBased/>]} />
          <Route path='/kitchen-sign-in' element={ <Sign_in_kitchen />} />
          <Route path='/kitchen-page' element={ <Kitchen_page /> } />
          <Route path='/kitchen-login' element={ <Kitchen_login/> }/> 
        </Routes>
    </BrowserRouter>
      </div>

  )
}

export default App
