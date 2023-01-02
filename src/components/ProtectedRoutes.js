import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const ProtectedRoutes = ({ children }) => {
    const { user } = UserAuth()
    const navigate = useNavigate()
    if (!user)
        navigate('/')



    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoutes