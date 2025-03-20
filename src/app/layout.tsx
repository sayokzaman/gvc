import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/layouts/navbar'
import { Raleway } from 'next/font/google'

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // Specify the weights you need
    variable: '--font-raleway' // Optional: Use a CSS variable
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
            <body className={`${raleway.className} antialiased`}>
                <Navbar />
                <div className='pt-15'>{children}</div>
            </body>
        </html>
    )
}
