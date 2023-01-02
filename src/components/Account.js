import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
    const { logoutUser } = UserAuth()
    const { user } = UserAuth()
    const navigate = useNavigate()
    console.log(user);
    const handleLogout = async (e) => {
        try {
            await logoutUser();
            navigate('/')
            console.log('you are logged out');
        }
        catch (err) {
            console.log(err.message);
        }


    }
    return (
        <div className='max-w-[600px] mx-auto my-16 p-4'>
            <h1 className='text-2xl font-bold py-4'></h1>
            <p>User Email:{user.email}</p>
            <button onClick={handleLogout} className='border px-6 py-2 my-4'>Logout</button>
        </div>
    )
}

export default Account