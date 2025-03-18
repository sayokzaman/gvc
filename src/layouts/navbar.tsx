import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='h-15 bg-background flex items-center px-15 text-foreground border-b-[0.2px] border-gray-900 fixed w-full'>
            <div id='container' className='flex items-center justify-between w-full'>
                <Image src='/logo.svg' alt='logo' width={75} height={31} />
                <div id='links' className='flex items-center gap-7 text-sm'>
                    <a className='nav-link' href='#'>
                        Home
                    </a>

                    <a className='nav-link' href='#'>
                        About
                    </a>

                    <a className='nav-link' href='#'>
                        Our Services
                    </a>

                    <a className='nav-link' href='#'>
                        Countries We Serve
                    </a>

                    <a className='nav-link' href='#'>
                        News
                    </a>

                    <a className='nav-link' href='#'>
                        Views
                    </a>

                    <button className='bg-accent color-background rounded-full h-7 px-5 text-background'>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
