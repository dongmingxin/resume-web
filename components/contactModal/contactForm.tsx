'use client'

import React, { useRef, MutableRefObject } from 'react'
import Button from "../../UI/button/button"

const ContactForm = () => {
    const formEl= useRef(null);

  return (
    <div className="px-8 pt-6 pb-8 mb-4 min-w-[50%]">
        <form ref={formEl} className='flex flex-col justify-center gap-6'>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline border-slate-200" id="email" type="text" placeholder="Email"/>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Phone Number"/>
            <textarea className="shadowblock w-full rounded-md border-slate-400 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500 appearance-none border rounded w-full py-2 px-3 text-slate-800 leading-tight focus:outline-none focus:shadow-outline"  placeholder="inquiry"/>
            <div className="flex justify-center mt-6">
                <Button variant="solid" size="sm">
                    Submit
                </Button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm