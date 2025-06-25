import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './assets/components/navbar/Navbar'
import Footer from './assets/components/footer/Footer'
import Home from './assets/pages/home/Home'
import Contact from './assets/pages/contact/Contact'
import Aboute from './assets/pages/aboute/Aboute'
import Login from './assets/pages/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <BrowserRouter>
      
      <Navbar/>


        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/aboute' element={<Aboute/>} />
          <Route  path='/signIn' element={<Login/>}/>

        </Routes>

        <Footer/>
      
      </BrowserRouter>

    </>
  )
}

export default App
