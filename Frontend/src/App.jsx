import React from 'react'
import { Route,  Routes } from 'react-router'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

import Protectedroute from './components/protectedroute'
import LoanApproval from './pages/LoanApproval'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        
        
        <Route path='/dashboard' element={
          <Protectedroute>
            <Dashboard/>
            
          </Protectedroute>
        }/>
        <Route path='/LoanApproval' element={
          <Protectedroute>
            <LoanApproval/>
          </Protectedroute>
        }/>

      </Routes>
    </div>
  )
}

export default App