import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

type cardProps = {
    data: Record<string, any>,
}

const Card: React.FC<cardProps> = ({ data }) => {
    return (
        <React.Fragment>
            <div className='group bg-zinc-900 col-span relative h-[12vw]'>
                <img
                    className='
                        cursor-pointer
                        object-cover
                        transition-all
                        duration-200
                        shadow-xl
                        rounded-md
                        group-hover:opacity-90
                        sm:group-hover:opacity-0
                        delay-300
                        w-full
                        h-[12vw]
                    '
                    src={data.thumbnailUrl}
                    alt="thumbnail" />

                <div
                    className='
                    opacity-0
                    absolute
                    top-0
                    transition-all
                    duration-300
                    z-10
                    invisible
                    sm:visible
                    delay-300
                    w-full
                    scale-0
                    group-hover:scale-110
                    group-hover:-translate-y-[6vw]
                    group-hover:translate-x-[2vw]
                    group-hover:opacity-100
                '>
                    <img
                        className='
                            cursor-pointer
                            object-cover
                            transition-all
                            duration-200
                            shadow-xl
                            rounded-t-md
                            w-full
                            h-[12vw]
                        '
                        src={data.thumbnailUrl}
                        alt="thumbail" />
                    <div
                        className='
                            z-10
                            bg-zinc-800
                            p-2
                            lg:p-4
                            absolute
                            w-full
                            transition
                            shadow-md
                            rounded-b-md
                        '>
                        <div className='flex flex-row items-center gap-3'>
                            <div
                                className='
                                    cursor-pointer
                                    w-6
                                    h-6
                                    lg:w-10
                                    lg:h-10
                                    bg-white
                                    rounded-full
                                    flex
                                    justify-center
                                    items-center
                                    transition-all
                                    duration-200
                                    hover:bg-neutral-300
                                '
                                onClick={() => { }}>
                                    <BsFillPlayFill size={20}/>
                            </div>
                        </div>
                        <p className='text-green-400 font-semibold mt-4'>
                            New <span className='text-white'>2003</span>
                        </p>

                        <div className='flex flex-row mt-4 gap-2 items-center'>
                            <p className='text-white text-[10px] lg:text-sm'>
                                {data.duration}
                            </p>
                        </div>

                        <div className='flex flex-row mt-4 gap-2 items-center'>
                            <p className='text-white text-[10px] lg:text-sm'>
                                {data.genre}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Card