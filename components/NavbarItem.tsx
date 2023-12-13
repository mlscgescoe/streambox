import React from 'react'

type navItemProps = {
    label: string;
}


const NavbarItem: React.FC<navItemProps> = ({
    label
}) => {
  return (
    <React.Fragment>
        <div className='
            text-white
            cursor-pointer
            hover:text-gray-300
            transition-all
            after:block
            after:h-[1px]
            after:w-0
            after:bg-white
            after:transition-all
            after:duration-300
            hover:after:w-full
        '>
                {label}
        </div>
    </React.Fragment>
  )
}

export default NavbarItem