import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../routes/Home'
import Login from '../routes/Login'
import NotFound from '../routes/NotFound'
import SignUp from '../routes/SignUp'

const AppRouter = () => {
  return (
    <div className='mx-8'>
    <Router>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup'element={<SignUp />} ></Route>
            <Route path='*' element={<NotFound />} ></Route>
        </Routes>
    </Router>
    </div>
  )
}

export default AppRouter