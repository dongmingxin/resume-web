import React from 'react'
import Card from './card'
import { keySkills, title, subTitle } from './data'

const Expertise = () => {
  return (
    <div className='flex flex-col gap-64 py-8'>
      <div className='mx-auto w-11/12 sm:w-11/12 md:w-10/12 lg:w-10/12'>
        <div className='flex flex-col gap-8 justify-center'>
          <div className='flex flex-col gap-4 text-center'>
            <div className='font-serif text-4xl font-bold tracking-normal text-slate-100 sm:text-5xl'>{title}</div>
            <div className='mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12'>
              <span className='font-normal text-base text-slate-300 tracking-normal'>{subTitle}</span>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 grid-rows-6 sm:grid-rows-3 md:grid-rows-3 gap-4'>
            {keySkills.map((e,i)=>(
              <Card
                key={i}
                icon={e.icon}
                title={e.title}
                content={e.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise