'use client'

import React from 'react'
import './index.css'

type Props = {
  children: React.ReactNode
}

const GlowWrapper = ({
    children
}:Props) => {
  return (
    <div className='glowing-wrapper'>
        {children}
    </div>
  )
}

export default GlowWrapper