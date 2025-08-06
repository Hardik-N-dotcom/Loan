import React, { Suspense, lazy } from 'react'
import { Route,  Routes } from 'react-router'
import Protectedroute from './components/protectedroute'

// Lazy load components for better code splitting
const Home = lazy(() => import('./pages/Home'))
const Signup = lazy(() => import('./pages/Signup'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Login = lazy(() => import('./pages/Login'))
const LoanApproval = lazy(() => import('./pages/LoanApproval'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
  </div>
)


const App = () => {
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
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
      </Suspense>
    </div>
  )
}

export default App