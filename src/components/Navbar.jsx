'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    const menus = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Rating',
            path: '/rating'
        },
        {
            title: 'Other',
            path: '/other'
        },
    ]
    return (
        <div className='bg-amber-500 w-[1100px] mx-auto p-'>
            <div className='text-center space-x-4 font-extrabold text-2xl pt-4 pb-4'>
            {
                menus?.map((menu)=> <Link key={menu.path} className={`${pathName === menu.path ? 'text-red-500' : ""}`} href={menu.path}>{menu.title}</Link>)
            }
            </div>
        </div>
    );
}

export default Navbar;
