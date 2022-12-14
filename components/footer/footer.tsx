import React from 'react'
import Button from '../../UI/button/button'
import githubLogo from '../../public/github-logo.svg'

const Footer = () => {
  return (
    <div className='bottom-0 z-30 w-full border-t border-slate-200/10 bg-black'>
        <div className='mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12'>
            <div className='flex items-center justify-center py-4'>
                <div className='flex flex-col gap-4 items-center text-sm'>
                    <div className='flex flex-row gap-16 items-center'>
                        <Button variant='link' icon={githubLogo} iconSize={30}>
                            Github
                        </Button>
                    </div>
                    <span>©Made by Mingxin Dong</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer