"use client"
import {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "../assets/logo.png"
import {Icon} from "@iconify/react";
import {usePathname} from "next/navigation";
import {navigationItems} from "@/constants/navigationItems";
import cn from "classnames"


function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto"
    }, [isOpen]);

    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const checkScrollTop = () => {
            setIsAtTop(window.scrollY === 0);
        };

        window.addEventListener('scroll', checkScrollTop);

        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, []);

    const pathname = usePathname();




    return (
        <nav className={cn( isAtTop ? "bg-[#ffffff1c]" : "bg-defaultGray", "w-full shadow-lg fixed transition-all duration-300 ease-in-out")}>
            <div className="mx-auto max-w-7xl px-4">
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
                            {navigationItems.map((item, i) => (
                                <Link key={i} className={cn(pathname === item.href ? "text-companyPink" : "text-white","flex items-center px-2 py-4 font-semibold md:hover:text-companyPink")}
                                      href={item.href}>{item.name}</Link>
                            ))}


                        </div>
                    </div>
                    <div className="ml-8 hidden items-center gap-4 md:flex">
                        <a href={"#"}><Icon icon="mdi:instagram"
                                            className={"rounded-full bg-companyPink p-2 text-white hover:bg-companyPinkHover"}
                                            width="33" height="33"/></a>
                        <a href={"#"}><Icon icon="ei:sc-facebook"
                                            className={"rounded-full bg-companyPink p-2 text-white hover:bg-companyPinkHover"}
                                            width="33" height="33"/></a>

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
                className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} absolute flex h-dvh w-full flex-col bg-white transition-transform duration-300 md:hidden`}>
                <Link className="flex items-center px-2 py-4 font-semibold" href="#">Home</Link>
                <Link className="flex items-center px-2 py-4 font-semibold" href="/services">Services</Link>
                <Link className="flex items-center px-2 py-4 font-semibold" href="/contact">Contact</Link>
                <Link className="flex items-center px-2 py-4 font-semibold" href="/about">About</Link>
                <Link className="flex items-center px-2 py-4 font-semibold" href="/downloads">Downloads</Link>
                <Link className="flex items-center px-2 py-4 font-semibold" href="/request-a-pricelist">Request a
                    pricelist</Link>
                <Link className="flex items-center px-2 py-4 font-semibold"
                      href="/connect-with-us">Connect-with-us</Link>
                <div className={"flex gap-8 px-2"}>
                    <a href={"#"}><Icon icon="mdi:instagram"
                                        className={"rounded-full bg-companyPink p-2 text-white hover:bg-companyPinkHover"}
                                        width="42" height="42"/></a>
                    <a href={"#"}><Icon icon="ei:sc-facebook"
                                        className={"rounded-full bg-companyPink p-2 text-white hover:bg-companyPinkHover"}
                                        width="42" height="42"/></a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
