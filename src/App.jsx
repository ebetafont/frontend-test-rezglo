
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'

import {Header} from './Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route index path="/home" element = {<Home />} />
        <Route path="/login" element = {<Login />} />
        <Route path="*" element = {<Navigate to='/login' />} />
      </Routes>

    </>
  )
}

export default App
