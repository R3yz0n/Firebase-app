import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Account from './Account'
import ForgotPassword from './ForgotPassword'
import PageNotFound from './PageNotFound'
import ProtectedRoutes from './ProtectedRoutes'
import Signin from './Signin'
import Signup from './Signup'

const Navigations = () => {
    const { user } = UserAuth()

    return (
        <Routes>

            {/* <Route path='/signup' element={!user ? < Signup /> : <PageNotFound />} /> */}
            <Route path='/signup' element={< Signup />} />
            <Route path='/' element={user ? < Account /> : <Signin />} />
            <Route path='/account' element={<ProtectedRoutes>  <Account /> </ProtectedRoutes>} />
            <Route path='forgotpassword' element={<ForgotPassword />} />
            <Route path='*' element={<PageNotFound />} />

        </Routes>
    )
}

export default Navigations