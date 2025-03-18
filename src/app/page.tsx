import Card from '@/components/card'
import Image from 'next/image'

export default function Home() {
    return (
        <main className='px-15'>
            <div className='flex justify-center'>
                <p className='mt-10 mb-16 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-16 items-center'>
                    <div>
                        <Image src='/logo.svg' alt='logo' width={306} height={124} />
                        <p className='text-3xl tracking-tight'>Global Visa Center Ltd.</p>
                    </div>
                    <Card className='px-12 py-10'>
                        <label className='text-3xl'>
                            Lorem ipsum dolor sit amet,
                            <br /> consectetur adipiscing elit.{' '}
                        </label>
                        <ul className='text-3xl mt-10 flex flex-col gap-5'>
                            <li>Kingdom of Saudi Arabia</li>
                            <li>United Arab Emirates</li>
                            <li>Sultanate of Oman</li>
                            <li>Singapore</li>
                            <li>Thailand</li>
                            <li>Malaysia</li>
                            <li>The Philippines</li>
                            <li>Vietnam</li>
                            <li>Serbia</li>
                            <li>Russia</li>
                        </ul>
                    </Card>
                </div>
                <Image src='/globe.svg' alt='logo' width={721} height={721} />
            </div>
        </main>
    )
}
