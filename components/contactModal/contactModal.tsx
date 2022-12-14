'use client'

import GlowWrapper from "../glowWrapper"
import ContactForm from "./contactForm"

type Props = {
    toggleModal: ()=>void
}

const ContactModal = ({
    toggleModal
}:Props) => {  
  return (
    <div 
        className='h-screen w-screen top-0 right-0 left-0 fixed flex justify-center items-center z-20 backdrop-blur-[1px] backdrop-brightness-[0.3] overscroll-none'
        onClick={toggleModal}
    >
        <GlowWrapper classname="w-72 sm:w-[450px]">
            <div className='relative z-30 bg-black ' onClick={(event) => event.stopPropagation() }>
                <div className="text-slate-100 flex justify-end pt-1 pr-2" onClick={toggleModal}>
                    X
                </div>
                <div className="flex flex-col gap-8 items-center justify-center px-8 py-8">
                    <h3 className="font-serif text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
                        Contact me
                    </h3>
                    <p className="font-normal text-base text-slate-200 tracking-normal">
                        This website only for presentation purpose this form will not be send through.
                    </p>
                </div>
                <ContactForm />
            </div>
        </GlowWrapper>
    </div>
  )
}

export default ContactModal