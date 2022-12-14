'use client'

import React from 'react'
import classNames from 'classnames'
import './index.css'

type Props = {
  children: React.ReactNode,
  classname?: string
}

const GlowWrapper = ({
    children,
    classname
}:Props) => {

  const wrapperStyle = classNames('glowing-wrapper', classname)
  return (
    <div className={wrapperStyle}>
        {children}
    </div>
  )
}

export default GlowWrapper