import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, } from './ui/sheet'
import { ShoppingCart } from 'lucide-react'

export default function Cart() {
    return (
        <Sheet>
            <SheetTrigger className='group -m-2 flex items-center'>
                <ShoppingCart
                    className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                    aria-hidden="true" />

                <span className='-ml-2 text-sm font-medium text-gray-200 group-hover:text-gray-800 rounded-full h-6 w-6 bg-red-200 items-center justify-center'>
                    0
                </span>
            </SheetTrigger>
            <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
                <SheetHeader className='space-y-2.5 pr-0'>
                    <SheetTitle>Cart (0)</SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
