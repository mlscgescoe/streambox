import Input from "@/components/input"
import { useCallback, useState } from "react"
import axios from "axios";
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import {toast} from 'react-hot-toast'

const Auth = () => {
    const [email, setmail] = useState('');
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');

    const [varient, setvarient] = useState('login')

    const toggleVariant = useCallback(() => {
        setvarient((currentvarient) => currentvarient === 'login' ? 'register' : 'login')
    }, [])

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/profiles'
            });
            toast.success('Successfully Logged In')
        } catch (error) {
            toast.error('Something went wrong')
            console.log(error)
        }
    }, [email, password]);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });
            login();
            toast.success('Successfully Signed Up')
        } catch (error) {
            toast.error('Something went wrong')
            console.log(error)
        }
    }, [email, name, password, login])


    return (
        <div className='relative w-full min-h-screen h-full bg-[url("/images/bg-banner.jpeg")] overflow-x-hidden bg-center bg-cover bg-fixed bg-no-repeat'>
            <div className="bg-zinc-900 w-full h-screen md:bg-opacity-50">
                <nav className='px-12 py-5'>
                    <img src="/images/logo.png" alt="Logo" className='md:h-12 h-8 mx-auto mt-2 md:mx-0 md:mt-0' />
                </nav>
                <div>
                    <div className="flex justify-center">
                        <div className="bg-zinc-900 bg-opacity-70 px-16 py-16 self-center mt-2 md:w-2/5 lg:max-w-md rounded-md w-full">
                            <h2 className='text-white text-4xl mb-8 font-semibold'>
                                {varient === 'login' ? 'Sign In' : 'Create account'}
                            </h2>
                            <div className="flex flex-col gap-4">
                                {varient === 'register' && (
                                    <Input
                                        label="Username"
                                        onChange={(e: any) => { setname(e.target.value) }}
                                        id="name"
                                        value={name}
                                        type="text"
                                    />
                                )}
                                <Input
                                    label="Email"
                                    onChange={(e: any) => { setmail(e.target.value) }}
                                    id="email"
                                    type="email"
                                    value={email}
                                />
                                <Input
                                    label="Password"
                                    onChange={(e: any) => { setpassword(e.target.value) }}
                                    id="password"
                                    type="password"
                                    value={password}
                                />
                            </div>
                            <button
                                onClick={varient === 'login' ? login : register}
                                className="bg-red-600 py-3 mt-4 text-white rounded-md w-full hover:bg-red-700 transition-all duration-200">
                                {varient === 'login' ? 'Login' : 'Sign Up'}
                            </button>
                            <div
                                className="flex flex-row items-center gap-4 mt-8 justify-center">

                                <div
                                    onClick={() => signIn('google', { callbackUrl: '/profiles' })}
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-150">
                                    <FcGoogle size={30} />
                                </div>

                                <div
                                    onClick={() => signIn('github', { callbackUrl: '/profiles' })}
                                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-all duration-150">
                                    <FaGithub size={30} />
                                </div>
                            </div>
                            <p
                                className="text-neutral-500 mt-8 text-center">
                                {varient === 'login' ? 'Not registered?' : 'Already Registered?'}
                                <span
                                    className="text-white ml-1 hover:underline cursor-pointer"
                                    onClick={toggleVariant}>{varient === 'login' ? 'Create an Account' : 'Login Here'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth