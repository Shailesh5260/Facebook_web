import React from 'react'
import Home from './pages/home/Home'
import Profile from './components/profile/Profile'
import Login from './components/login/Login'
import Register from './components/register/Register'

const App = () => {
  return (
    <>
    {/* <Home/> */}
    <Profile/>
    <Login/>
    <Register/>
    </>
  )
}

export default App