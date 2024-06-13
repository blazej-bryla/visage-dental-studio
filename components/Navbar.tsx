"use client"
import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../assets/logo.png"
import {Icon} from "@iconify/react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent shadow-lg ">
            <div className="mx-auto max-w-6xl px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <Link href="#" className="hidden items-center p-2 md:flex">
                                <Image src={Logo} alt="Logo" width={140} height={140}/>
                            </Link>
                            <Link href="#" className="flex items-center p-2 md:hidden">
                                <Image src={Logo} alt="Logo" width={70} height={70}/>
                            </Link>
                        </div>
                        <div className="hidden flex-wrap gap-4 gap-y-0  uppercase md:flex">
                            <Link className="flex items-center px-2 py-4 font-semibold md:hover:text-companyPink"
                                  href="#">Home</Link>
                            <Link className="flex items-center px-2 py-4 font-semibold md:hover:text-companyPink"
                                  href="/services">Services</Link>
                            <Link className="flex items-center px-2 py-4 font-semibold md:hover:text-companyPink"
                                  href="/contact">Contact</Link>
                            <Link className="flex items-center px-2 py-4 font-semibold md:hover:text-companyPink"
                                  href="/about">About</Link>
                            <Link className="flex items-center px-2 py-4 font-semibold md:hover:text-companyPink"
                                  href="/downloads">Downloads</Link>
                            <Link className="flex items-center px-2 py-4 font-semibold md:hover:text-companyPink"
                                  href="/request-a-pricelist">Request
                                a
                                pricelist</Link>
                            <Link className="flex items-center px-2 py-4 font-semibold md:hover:text-companyPink"
                                  href="/connect-with-us">Connect-with-us</Link>


                        </div>
                    </div>
                    <div className="ml-8 hidden items-center gap-4 md:flex">
                        <a href="#"
                           className="rounded p-2 font-medium text-gray-500 transition duration-300  "><Icon
                            icon="entypo-social:instagram-with-circle" width={"33"} height={"33"} color="#A42E68"/></a>
                        <a href="#"
                           className="rounded p-2 font-medium text-gray-500 transition duration-300  "><Icon
                            icon="entypo-social:facebook-with-circle" width={"33"} height={"33"} color="#A42E68"/></a>
                    </div>
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} absolute flex w-full flex-col bg-white transition-transform duration-300 md:hidden`}>
                <Link className="flex items-center px-2 py-4 font-semibold" href="#">Home</Link>
                <Link className="flex items-center px-2 py-4 font-semibold" href="/services">Services</Link>
                <Link className="flex items-center px-2 py-4 font-semibold" href="/contact">Contact</Link>
                <Link className="flex items-center px-2 py-4 font-semibold" href="/about">About</Link>
                <Link className="flex items-center px-2 py-4 font-semibold" href="/downloads">Downloads</Link>
                <Link className="flex items-center px-2 py-4 font-semibold" href="/request-a-pricelist">Request a
                    pricelist</Link>
                <Link className="flex items-center px-2 py-4 font-semibold"
                      href="/connect-with-us">Connect-with-us</Link>
                <div className={"flex"}>
                    <a href="#"
                       className="rounded p-2 font-medium text-gray-500 transition duration-300 "><Icon
                        icon="entypo-social:instagram-with-circle" width={"33"} height={"33"} color="#A42E68"/></a>
                    <a href="#"
                       className="rounded p-2 font-medium text-gray-500 transition duration-300 "><Icon
                        icon="entypo-social:facebook-with-circle" width={"33"} height={"33"} color="#A42E68"/></a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
