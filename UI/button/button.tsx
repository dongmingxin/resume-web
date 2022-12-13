import React from 'react'
import classNames from "classnames";
import Image from 'next/image';

export type ButtonProps = {
    children: React.ReactNode;
    size?: 'sm' | 'md';
    variant?: 'outline' | 'solid' | 'link';
    className?: string;
    icon?: any;
    iconSize?:number,
    [x: string] : any;
}

const Button = ({
    children,
    size,
    variant,
    icon,
    iconSize,
    className,
    ...restProps
}:ButtonProps) => {

    const btnStyle = classNames('flex flex-row items-center  gap-2 relative z-10 border border-transparent', className,{
      'py-2 px-6' : size === 'sm',
      'py-3 px-8' : size === 'md',
      'hover:opacity-50 text-slate-200 text-lg w-full h-full' : variant === 'link',
      'rounded-full bg-slate-200 text-slate-800 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-slate-200 before:opacity-0 before:blur before:transition-opacity before:duration-300 hover:before:opacity-100' : variant === 'solid'
    })

  return (
    <button {...restProps} className={btnStyle}>
        {icon && 
          (<Image
              src={icon} 
              alt="icon"
              width={iconSize?iconSize:20} 
              height={iconSize?iconSize:20}
            /> 
          )
        }
        {children}
    </button>
  )
}

export default Button;