import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './nav-links'
import { Button } from '../button'

export default function NavBar() {
    return (
            <nav className='fixed flex flex-row items-center h-20 px-4 md:px-14  lg:px-24 py-9  top-0 z-50 w-full justify-between bg-[#FFFFFF] border-b border-b-[#00000033] '>
                {/* <div className='flex flex-row h-14  items-center '> */}
                    <Link
                        className=" items-start justify-center rounded-md bg-[#FFFFFF] "
                        href="/"
                    >
                        <div className=" text-white ">
                            <Image
                                src="/logo.png"
                                width={115}
                                height={37}
                                className="block"
                                alt="Logo"
                            />
                        </div>
                    </Link>
                    <div className="hidden md:flex flex-row items-center justify-center lg:px-10  bg-white p-4">
                        <NavLinks />
                    </div>
                    <div className="hidden md:flex flex-end items-end justify-center bg-white p-4">
                        <Button className='bg-[#37535E] text-[#ffffff]'>Book A Call</Button>
                    </div>
                {/* </div> */}

            </nav>
    )
}
