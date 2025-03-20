'use client'
import Button from '@/components/button'
import HeroSection from '@/components/hero-section'
import { cn } from '@/lib/utils'
import { Aleo } from 'next/font/google'
import React from 'react'

const aleo = Aleo({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // Specify the weights you need
    variable: '--font-aleo' // Optional: Use a CSS variable
})

export default function Home() {
    return (
        <main className='px-15 flex flex-col items-center text-primary relative'>
            <p className='text-4xl text-center mt-24 font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
            </p>
            <div className='h-[789px] w-[789px] mt-14'>
                <HeroSection />
            </div>
            <div className='w-full bg-white hero-gradient absolute top-7/12 flex flex-col items-center'>
                <div className='w-8/12 h-64 flex card-gradient mt-26 rounded-4xl'>
                    <div className='w-1/3 flex flex-col items-center py-2 justify-end gap-10 border-r my-7'>
                        <span className={`text-6xl ${aleo.className}`}>1,57,890</span>
                        <span className='font-semibold text-3xl'>Statistical Data</span>
                    </div>
                    <div className='w-1/3 flex flex-col items-center py-2 justify-end gap-10 border-r my-7'>
                        <span className={`text-6xl ${aleo.className}`}>95.36%</span>
                        <span className='font-semibold text-3xl'>Percentages</span>
                    </div>
                    <div className='w-1/3 flex flex-col items-center py-2 justify-end gap-10 my-7'>
                        <span className={`text-6xl ${aleo.className}`}>5,410,545</span>
                        <span className='font-semibold text-3xl'>Another Data</span>
                    </div>
                </div>

                <Button className={cn('text-3xl font-extrabold h-20  px-21 rounded-full mt-22 apply-button')}>Apply Now</Button>
            </div>
        </main>
    )
}
