'use client'

import React from 'react'
import GlowWrapper from '../glowWrapper'
import Button from '../../UI/button'
import pupiloverIcon from '../../public/puppilovers.png'
import langpoly from '../../public/langpoly.png'
import jr from '../../public/jr.png'
import oktion from '../../public/oktion.png'
import margpizza from '../../public/margpizza.jpg'
import weatherchannel from '../../public/weatherchannel.png'

const PastProject = () => {
  return (
    <div className='flex flex-col gap-8 justify-center text-center'>
        <div className='mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12'>
            <div className='flex flex-col gap-2'>
                <h2 className='font-serif text-4xl font-bold tracking-normal text-slate-100 sm:text-5xl'>
                    Past Project
                </h2>
                <span className='font-normal text-base text-slate-300 tracking-normal'>
                    From start-up, to scale-up, across all kinds of industries
                </span>
            </div>
        </div>
        <div className='mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12'>
            <GlowWrapper>
                <div className='grid grid-cols-2 sm:grid-cols-3 p-2 md:p-8 lg:grid-cols-3 grid-rows-none md:grid-rows-2 gap-8 items-center justify-items-center font-serif text-2xl font-semibold overflow-hidden'>
                    <Button variant='link' icon={langpoly} iconSize={50}>Langpoly</Button>
                    <Button variant='link' icon={pupiloverIcon} iconSize={50}>PopiLovers</Button>
                    <Button variant='link' icon={oktion} iconSize={50}>Oktion</Button>
                    <Button variant='link' icon={jr} iconSize={50}>JR Acadmay</Button>
                    <Button variant='link' icon={margpizza} iconSize={50}>Marg Pizza</Button>
                    <Button variant='link' icon={weatherchannel} iconSize={50}>Weather Channel</Button>
                </div>
            </GlowWrapper>
        </div>
    </div>
  )
}

export default PastProject