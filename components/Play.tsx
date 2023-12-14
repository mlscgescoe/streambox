import { useRouter } from 'next/router';
import React from 'react'
import { BsPlayFill } from 'react-icons/bs'

type playProps = {
    movieId: string;
}

const Play: React.FC<playProps> = ({movieId}) => {
    const router = useRouter();
    return (
        <React.Fragment>
            <button
                onClick={() => router.push(`/watch/${movieId}`)}
                className='
                    bg-white
                    rounded-md
                    py-1 md:py-2
                    px-2 md:px-4
                    w-auto
                    text-xs lg:text-lg
                    font-semibold
                    flex flex-row
                    items-center
                    hover:bg-neutral-300
                    transition-all
                    duration-200
                    cursor-pointer
                '
            >
                <BsPlayFill size={20} className='mr-1' />
                Play
            </button>
        </React.Fragment>
    )
}

export default Play