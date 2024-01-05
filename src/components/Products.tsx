import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { perks } from '@/utils/constants'

export default function Products() {
    return (
        <MaxWidthWrapper className='py-20'>
            <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6
            lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
                {perks.map((perk) => (
                    <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                        <div className='md:flex-shrink-0 flex justify-center'>
                            <div className='h-16 w-16 items-center flex justify-center rounded-full bg-blue-100 text-blue-900'>
                                {<perk.icon className='w-1/3 h-1/3 ' />}
                            </div>
                        </div>

                        <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                            <h3 className='text-base font-bold text-gray-900'>
                                {perk.name}
                            </h3>
                            <p className='mt-3 text-sm text-muted-foreground'>
                                {perk.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </MaxWidthWrapper>
    )
}
