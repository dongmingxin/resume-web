"use client"

import React from 'react'
import Button from '../../UI/button';
import { motion } from "framer-motion";
import { Typewriter } from '../typewriter';
import send from '../../public/send.svg';
import linkedinIcon from '../../public/link.svg';

export const JobIntro = () => {
  return (
  <div className="mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12">
    <div className="flex flex-col h-screen gap-16 items-center justify-center">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 75 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-gradient-to-b from-slate-50 to-slate-400 bg-clip-text text-6xl font-black text-transparent sm:tracking-tight md:text-7xl">
              James John
          </div>
          <div className="font-semibold font-serif text-2xl sm:text-3xl tracking-tight text-slate-400 tracking-tight">
              Freelance
              &nbsp;
              <Typewriter text={['Frontend', 'Backend', 'UI/UX']}/>
              &nbsp;
              Developer
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ delay: 0.3, ease: "easeOut", duration: 2 }}
      >
        <div className='flex flex-row gap-16'>
            <Button size='md' variant='solid' icon={send}>Contact</Button>
            <Button size='md' variant='solid' icon={linkedinIcon}>Linkedin</Button>
        </div>
      </motion.div>
    </div>
  </div>
  )
}