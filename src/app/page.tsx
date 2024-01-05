import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Products from '@/components/Products'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Your Marketplace for high quality {' '}
            <span className='text-blue-800'>
              digital assets.
            </span>
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Welcome to DigitalHippo. Every assest on our platform is verified by our
            team to ensure our highest standards.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href={"/products"} className={buttonVariants()}>Browse Trending</Link>
            <Button variant="outline">Our quality promise &rarr;</Button>
            {/* <Link href={"/home"} className={buttonVariants({ variant: "outline" })}>Click here</Link> */}
          </div>
        </div>
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <Products />
      </section>
    </>
  )
}