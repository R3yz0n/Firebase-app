import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import FormInput from "../UI/FormInput"
import Button from "../UI/Button"
import { UserAuth } from "../context/AuthContext"


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    // context imported
    const { createUser } = UserAuth()
    const navigate = useNavigate()


    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            await createUser(email, password)
            navigate('/account')

        }
        catch (err) {
            setError(err.message)

        }



    }
    return (
        <div className="max-w-[400px] sm:max-w-[450px] mx-auto my-16 p-6 sm:p-10 bg-[rgb(240,242,245)] border-2  rounded-lg" onSubmit={submitHandler}>

            <h1 className='py-2 text-2xl md:text-3xl font-bold text-center'>Signup for an account</h1>


            <form>

                <FormInput type='email' label='Email Address' val={email} setVal={setEmail} />

                <FormInput type='password' label='Password' val={password} setVal={setPassword} />
                {error && <p className="text-center text-red-500 py-1 font-bold">{error}</p>}

                <Button className=''>Create New Account</Button>


                <p className="py-4 text-center text-[1.05rem]">Already Have an account?
                    <Link to='/' className='hover:underline text-blue-900 ml-2'> Sign In </Link>
                </p>

            </form>


        </div >
    )
}

export default Signup