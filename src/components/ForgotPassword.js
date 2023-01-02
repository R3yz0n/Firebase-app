import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import Button from '../UI/Button'
import FormInput from '../UI/FormInput'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState(false)
    const { forgotPassword } = UserAuth()

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await forgotPassword(email)
            console.log('suces');
            setMessage(true)

        }
        catch (err) {
            console.log(err.message);

        }


    }
    return (
        <div className="max-w-[400px] sm:max-w-[450px] mx-auto my-10 p-6 sm:p-10 bg-[rgb(240,242,245)] border-2 rounded-lg ">

            <form className='' onSubmit={submitHandler}>
                <FormInput type='email' label='Email Address' val={email} setVal={setEmail} />
                {message && <p className='py-2 font-medium underline'>Please check your email</p>}
                <Button type='submit'>Send</Button>
            </form>
        </div>
    )
}

export default ForgotPassword