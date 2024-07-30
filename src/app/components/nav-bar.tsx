/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    {
        path: "/",
        name: "Home",
    },
    {
        path: "/about",
        name: "Sobre",
    },
    {
        path: "/services",
        name: "Services",
    },
    {
        path: "/contact",
        name: "Contatos",
    },
];

function Navbar() {
    const pathname = usePathname() || "/";
    const [hoverLink, setHoverLink] = useState(pathname);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='fixed rounded-3xl top-5 left-1/2 transform -translate-x-1/2 bg-blue-950 z-50 '>
            <nav className='flex items-center justify-between max-w-screen-lg mx-auto p-4'>
                <a href="/" className="flex items-center">
                    <img className="h-10 w-auto " src="/images/navbar-logo.png" alt="Logo da empresa" />
                </a>
                <div className="md:hidden flex items-center ">
                    <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white">Alummitec</h1>
                    <button 
                        onClick={toggleMenu}
                        className="text-white focus:outline-none flex items-center p-4"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex items-center justify-center gap-2 flex-1">
                    {navLinks.map((item) => {
                        const isActive = item.path === pathname;
                        return (
                            <Link key={item.path} href={item.path}>
                                <span
                                    className={`${
                                        isActive ? 'text-blue-500' : 'text-white'
                                    } hover:text-gray-700 cursor-pointer`}
                                    onMouseEnter={() => setHoverLink(item.path)}
                                    onMouseLeave={() => setHoverLink(pathname)}
                                >
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="md:hidden border-t border-blue-600/90"
                    >
                        <div className="flex flex-col items-center">
                            {navLinks.map((item) => {
                                const isActive = item.path === pathname;
                                return (
                                    <Link key={item.path} href={item.path}>
                                        <span
                                            className={`${
                                                isActive ? 'text-blue-500' : 'text-white'
                                            } hover:text-gray-700 cursor-pointer py-2`}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;
