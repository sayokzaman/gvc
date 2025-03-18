import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/layouts/navbar'
import { Inter } from 'next/font/google'

// Configure the Inter font
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // Specify the weights you need
    variable: '--font-inter' // Optional: Use a CSS variable
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
            <body className={`${inter.className} antialiased`}>
                <Navbar />
                <div className='pt-15'>{children}</div>
            </body>
        </html>
    )
}
