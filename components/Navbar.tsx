import React, { useCallback, useEffect, useState } from 'react'
import NavbarItem from './NavbarItem'
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs'
import MobileNav from './MobileNav'
import Account from './Account'

const offset = 66;

const Navbar = () => {

    const [navVisible, setnavVisible] = useState(false);
    const [accMenuVisible, setaccMenuVisible] = useState(false);
    const [showBG, setShowBG] = useState(false);

    useEffect(() => {
        const scroll = () => {
            if (window.scrollY >= offset) {
                setShowBG(true);
            } else {
                setShowBG(false);
            }
        }

        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
        }
    }, [])

    const toggleNav = useCallback(() => {
        setnavVisible((current) => !current)
    }, [])

    const toggleAccMenu = useCallback(() => {
        setaccMenuVisible((current) => !current)
    }, [])

    return (
        <React.Fragment>
            <nav className='w-full fixed z-40'>
                <div
                    className={`
                    px-4
                    py-6
                    md:px-6
                    flex
                    flex-row
                    items-center
                    transition-all
                    duration-200
                    ${showBG ? 'bg-zinc-900 bg-opacity-90' : ''}

                `}
                >
                    <img src="/images/logo.png" className='h-4 lg:h-7' alt="Logo" />
                    <div className='
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex
                '>
                        <NavbarItem label='Home' />
                        <NavbarItem label='TV Shows' />
                        <NavbarItem label='Movies' />
                        <NavbarItem label='New & Popular' />
                        <NavbarItem label='My List' />
                    </div>

                    <div onClick={toggleNav} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                        <p className='text-white text-sm'>Browse</p>
                        <BsChevronDown className={`text-white transition-all ${navVisible ? 'rotate-180' : 'rotate-0'}`} />
                        <MobileNav visible={navVisible} />
                    </div>

                    <div className='flex flex-row ml-auto gap-7 items-center'>

                        <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition-all duration-200'>
                            <BsSearch />
                        </div>

                        <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition-all duration-200'>
                            <BsBell />
                        </div>

                        <div onClick={toggleAccMenu} className='flex flex-row gap-2 cursor-pointer relative items-center'>
                            <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                                <img src="/images/profile.png" alt="profileIcon" />
                            </div>
                            <BsChevronDown className={`text-white transition-all ${accMenuVisible ? 'rotate-180' : 'rotate-0'}`} />
                            <Account visible={accMenuVisible} />
                        </div>

                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar