import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/layouts/navbar'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // Specify the weights you need
    variable: '--font-mulish' // Optional: Use a CSS variable
})
export const metadata: Metadata = {
    title: 'Global Visa Center'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${mulish.className} antialiased`}>
                <Navbar />
                <div className='text-primary'>{children}</div>
            </body>
        </html>
    )
}
