'use client'
import Button from '@/components/button'
import { cn } from '@/lib/utils'
import { AlignJustifyIcon, ChevronDownIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <nav className='drop-shadow-md shadow-md'>
            <div className='w-full flex flex-col md:flex-row justify-between text-primary relative default-margin'>
                <div className='flex items-center h-21'>
                    <div className='flex flex-col lg:items-end lg:gap-3 lg:flex-row'>
                        <Image src='/logo.svg' alt='logo' width={100} height={100} />
                        <span className='-mb-1.25 md:block text-nowrap text-sm lg:text-base font-medium'>Global Visa Center</span>
                    </div>
                </div>

                <div id='links' className={cn('flex flex-col md:flex-row md:items-center h-0 md:h-auto gap-5 md:gap-2 lg:gap-6 font-medium overflow-hidden transition-all duration-300', collapsed ? 'h-0' : 'h-73 pt-4')}>
                    <Link href='#' className='hover-underline nav-links'>
                        Home
                    </Link>

                    <Link href='#' className='hover-underline nav-links cursor-pointer'>
                        <div className='flex items-center gap-1'>
                            <span>About</span>
                            <ChevronDownIcon className='w-4 h-4' />
                        </div>
                    </Link>

                    <Link href='#' className='hover-underline nav-links cursor-pointer'>
                        <div className='flex items-center gap-1'>
                            <span>Services</span>
                            <ChevronDownIcon className='w-4 h-4' />
                        </div>
                    </Link>

                    <Link href='#' className='hover-underline nav-links text-nowrap'>
                        Countries We Serve
                    </Link>

                    <Link href='#' className='hover-underline nav-links'>
                        News
                    </Link>

                    <Button className='w-auto bg-accent h-10 rounded-lg text-nowrap px-4 text-secondary'>Apply Now</Button>
                </div>

                <Button onClick={() => setCollapsed(!collapsed)} className='absolute right-3 top-7.5 md:hidden'>
                    <AlignJustifyIcon />
                </Button>
            </div>
        </nav>
    )
}

export default Navbar
