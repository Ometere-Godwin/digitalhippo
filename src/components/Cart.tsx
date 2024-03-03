import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, } from './ui/sheet'
import { ShoppingCart } from 'lucide-react'
import { Separator } from './ui/separator';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import Image from 'next/image';

export default function Cart() {
    const itemCount = 0;
    const fee = 1;
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
                {itemCount > 0 ? (
                    <>
                        <div className='space-y-4 pr-6'>
                            <Separator />
                            <div className='space-y-1.5 text-sm'>
                                <div className='flex'>
                                    <span className='flex-1'>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Transaction Fee</span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Total</span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                            </div>

                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link
                                        href={"/cart"}
                                        className={buttonVariants({
                                            className: "w-full",
                                        })}>
                                            {/* This shows continue to checkout */}
                                        Continue to Checkout
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className='flex h-full flex-col items-center justify-center space-y-1'
                        aria-hidden="true">
                        <div className='relative mb-4 h-60 w-60 text-muted-foreground'>
                            <Image
                                src="/assets/hippo-empty-cart.png"
                                alt='empty shopping cart hippo'
                                fill />
                        </div>
                        <p className='text-xl font-semibold'>Your cart is empty</p>
                        <SheetTrigger asChild>
                            <Link href={"/products"}
                                className={buttonVariants({
                                    variant: "link",
                                    size: "sm",
                                    className: 'text-sm text-muted-foreground',
                                })}>
                                Add items to your cart to checkout
                            </Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}
