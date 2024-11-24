'use client';

import Link from "next/link";

const links = [
    { 
        name : 'Home',
        href : '/',
    },
    {
        name : 'About',
        href : '/#about',
    },
    {
        name : 'Alur Penggunaan',
        href : '/#alur-penggunaan',
    },
    {
        name : 'Kontak',
        href : 'https://wa.me/6281375839812',
        target : '__blank',
    },
]
export default function NavLinks(){
    return(
        <>
            {links.map((link) => {
                return(
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-white hover:text-yellow-400 transition duration-300 text-lg"
                        target={link.target}
                        >
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}