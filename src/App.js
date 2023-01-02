import { Route, Routes } from 'react-router-dom'
import Account from './components/Account'
import Navigations from './components/Navigations'
import PageNotFound from './components/PageNotFound'
import ProtectedRoutes from './components/ProtectedRoutes'
import Signin from './components/Signin'
import Signup from './components/Signup'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <>
      <h1 className='text-center text-3xl font-bold'>  Firebase Auth and context </h1>

      <AuthContextProvider>

        <Navigations />

      </AuthContextProvider>

    </>
  )
}

export default App