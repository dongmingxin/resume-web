"use client";

import React from 'react'
import Image from "next/image"
import Link from "next/link";
import Button from '../../UI/button';
import sendIcon from '../../public/send.svg';

export const Navigation = () => {
  return (
    <nav className='fixed top-0 z-30 w-full border-b border-slate-200/10 bg-gradient-to-b from-black to-transparent backdrop-blur-lg box-border'>
        <div className='mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12'>
            <div className="flex h-16 items-center justify-between">
                <Link href='/'>
                    <div className='flex justify-center items-center'>
                        <div className="h-10 w-10 rounded-full bg-white p-0.5">
                            <Image
                                alt="logo placeholder"
                                className="h-9 w-9 rounded-full object-contain"
                                height={72}
                                src="/logoipsum.svg"
                                width={72}
                            />
                        </div>
                        <div className="hidden sm:inline-block pl-4">
                            <div className='font-bold'>James John</div>
                        </div>
                    </div>
                </Link>
                <Button size='sm' variant='solid' icon={sendIcon}>
                    Contact
                </Button>
            </div>
        </div>
    </nav>
  )
}