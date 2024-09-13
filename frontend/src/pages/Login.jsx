import React, { useState } from 'react'

const Login = () => {

    const [state, SetState] = useState('Sign Up')
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [name, SetName] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()

    }


    return (
        <form className='min-h-[80vh] flex items-center '>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
                <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'} </p>
                <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
                {
                    state === 'Sign Up' && <div className='w-fulll'>
                        <p>Full Name</p>
                        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e) => SetName(e.target.value)} value={name} required />
                    </div>
                }


                <div className='w-fulll'>
                    <p>Email</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='email' onChange={(e) => SetEmail(e.target.value)} value={email} required />
                </div>

                <div className='w-fulll'>
                    <p>Password</p>
                    <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='password' onChange={(e) => SetName(e.target.value)} value={password} required />
                </div>
                <button className='bg-primary text-white w-full py-2 rounded-md text-base hover:bg-blue-800'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
                {
                    state === 'Sign Up' ? <p>Already have an account? <span onClick={() => SetState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p> : <p>Create an new account? <span onClick={() => SetState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
                }
            </div>
        </form>
    )
}

export default Login