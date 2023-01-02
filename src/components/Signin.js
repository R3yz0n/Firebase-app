import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Button from '../UI/Button'
import FormInput from '../UI/FormInput'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const { loginUser } = UserAuth()



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await loginUser(email, password)


            console.log('sucessful');
            navigate('/account');

        }
        catch (err) {
            setError(err.message)
            console.log(err.message);
        }


    }


    return (
        <div className="max-w-[400px] sm:max-w-[450px] mx-auto my-16 p-6 sm:p-10 bg-[rgb(240,242,245)] border-2 rounded-lg ">

            <div>

                <h1 className='py-2 text-3xl font-bold text-center'>Log In</h1>


                <form onSubmit={handleSubmit} className='mb-3'>

                    <FormInput type='email' label='Email Address' val={email} setVal={setEmail} />

                    <FormInput type='password' label='Password' val={password} setVal={setPassword} />
                    {error && <p className="text-center text-red-500 py-1 font-bold">{error}</p>}

                    <Button onClick={handleSubmit}>Log In</Button>

                </form>

                <p className='mt-3'><Link to='/forgotpassword' className='hover:text-blue-800 hover:underline'>Forgot password ?</Link></p>

                <p className="pt-3">
                    Don't Have an account?
                    <Link to='/signup' className=' text-blue-900 hover:underline'> Sign Up.</Link>
                </p>

            </div >




        </div >
    )
}

export default Signin