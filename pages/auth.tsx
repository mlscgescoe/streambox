import Input from "@/components/input"
import { useCallback, useState } from "react"

const auth = () => {

    const [mail, setmail] = useState('');
    const [name, setname] = useState('');
    const [pass, setpass] = useState('');

    const [varient, setvarient] = useState('login')
    const toggleVariant = useCallback(() => {
        setvarient((currentvarient) => currentvarient === 'login' ? 'register' : 'login')
    }, [])

    return (
        <div className='relative w-full min-h-screen h-full bg-[url("/images/bg-banner.jpeg")] overflow-x-hidden bg-center bg-cover bg-fixed bg-no-repeat'>
            <div className="bg-black w-full h-screen lg:bg-opacity-50">
                <nav className='px-12 py-5'>
                    <img src="/images/logo.png" alt="Logo" className='h-12' />
                </nav>
                <div>
                    <div className="flex justify-center">
                        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                            <h2 className='text-white text-4xl mb-8 font-semibold'>
                                {varient === 'login' ? 'Sign In' : 'Create account'}
                            </h2>
                            <div className="flex flex-col gap-4">
                                {varient === 'register' && (
                                    <Input
                                        label="Username"
                                        onChange={(e) => { setname(e.target.value) }}
                                        id="uname"
                                        value={name}
                                    />
                                )}
                                <Input
                                    label="Email"
                                    onChange={(e) => { setmail(e.target.value) }}
                                    id="email"
                                    type="email"
                                    value={mail}
                                />
                                <Input
                                    label="Password"
                                    onChange={(e) => { setpass(e.target.value) }}
                                    id="pass"
                                    type="password"
                                    value={pass}
                                />
                            </div>
                            <button className="bg-red-600 py-3 mt-4 text-white rounded-md w-full hover:bg-red-700 transition-all duration-200">
                                {varient === 'login'? 'Login' : 'Sign Up'}
                            </button>
                            <p className="text-neutral-500 mt-8 text-center">
                                {varient === 'login'? 'Not registered?' : 'Already Registered?'}<span className="text-white ml-1 hover:underline cursor-pointer" onClick={toggleVariant}>{varient === 'login'? 'Create an Account' : 'Login Here'}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default auth