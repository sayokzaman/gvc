'use client'
import Button from '@/components/button'
import { ArrowRightIcon } from 'lucide-react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins'
})

export default function Home() {
    const [visibleSections, setVisibleSections] = useState<string[]>([])
    const sectionsRef = useRef<NodeListOf<HTMLDivElement> | null>(null)

    useEffect(() => {
        sectionsRef.current = document.querySelectorAll('.scroll-section')

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleSections(prev => [...prev, entry.target.id])
                    }
                })
            },
            { threshold: 0.05 }
        )

        sectionsRef.current.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    return (
        <main>
            <section id='hero' className='h-144 overflow-hidden'>
                <Image src='/hero2.jpg' alt='hero' width={1920} height={1080} className='object-cover w-full h-full ' />
            </section>

            <section className='relative'>
                <div className='text-3xl sm:text-6xl md:text-7xl font-extrabold text-center pt-7.5 relative -z-10 '>
                    <span className='text-black'>Global Visa Center</span>
                    <div className='h-full w-full absolute top-0 about-section-gradient '></div>
                </div>

                <span className={`absolute left-1/2 -translate-x-1/2 -bottom-5 font-medium text-2xl sm:text-4xl ${poppins.className}`}>
                    About <span className='text-accent'>GVC</span>
                </span>
            </section>

            <section className='bg-secondary pt-12 pb-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 default-margin'>
                    <div id='fadeInLeft' className={`scroll-section transition-all duration-400 ${visibleSections.includes('fadeInLeft') ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-20 -translate-x-20'}`}>
                        <Image src='/about-placeholder.png' alt='about' width={1280} height={1080} className='w-full h-full object-cover' />
                    </div>
                    <div id='fadeInRight' className={`flex flex-col gap-4 scroll-section transition-all duration-400 ${visibleSections.includes('fadeInRight') ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-20 translate-x-20'}`}>
                        <div className='leading-7'>
                            Global Visa Center Ltd. (GVC), headquartered in Banani, Dhaka, is poised to become a leader in outsourcing and technology services, serving government missions from Bangladesh to the global stage. Specializing in visa, passport, and consular applications, the company
                            empowers governments to concentrate on important decision-making processes by efficiently managing administrative functions. Committed to ethical practices, sustainability, and advanced technology, GVC delivers pioneering e-governance and biometric solutions.
                        </div>
                        <Button className='w-fit flex items-center justify-center gap-2 bg-accent h-10 rounded-lg text-nowrap px-6 text-secondary'>
                            <span>GVC Mission, Vision & Objectives</span>
                            <ArrowRightIcon className='w-4.5 h-4.5' />
                        </Button>
                    </div>
                </div>
            </section>

            <section className='relative bg-key'>
                <Image src='/bg-map.png' alt='map' width={1920} height={1080} className='w-full object-cover text-black opacity-10' />
            </section>
        </main>
    )
}
