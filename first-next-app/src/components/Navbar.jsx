"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Service",
            path: '/service'
        },
        {
            title: "Contact",
            path: '/contact'
        },
        {
            title: "Blog",
            path: '/blog'
        },
        {
            title: "Categories",
            path: '/categories'
        },
    ]
    const handler = () => {
        router.push('/login')

    }
    return (
        <nav className='flex px-6 py-4 justify-between items-center bg-blue-950 text-white'>
            <h6 className='font-bold'>Next<span className='text-red-700 font-bold'>Hero</span></h6>
            <ul className='flex px-6 py-4 space-x-8 justify-between items-center'>
                {
                    links?.map((link) => <Link className={`${pathName === link.path && "text-yellow-300"}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            <button onClick={handler} className='bg-white text-black p-2 rounded-md'>Login</button>
        </nav>
    );
};

export default Navbar;