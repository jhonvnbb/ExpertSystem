'use client';

import Link from "next/link";
import {
    FaInstagram,
    FaTiktok,
    FaTwitter,
    FaYoutube,
    FaGlobe,
} from "react-icons/fa";

const links = [
    {
        id: 1,
        name: <FaInstagram />,
        href: 'https://www.instagram.com/expertsistem/',
    },
    {
        id: 2,
        name: <FaTiktok />,
        href: 'https://www.tiktok.com/@expertsistem',
    },
    {
        id: 3,
        name: <FaTwitter />,
        href: 'https://twitter.com/expertsistem',
    },
    {
        id: 4,
        name: <FaYoutube />,
        href: 'https://www.youtube.com/@expertsistem',
    },
    {
        id: 5,
        name: <FaGlobe />,
        href: 'https://expertsistem.com',
    },
];

export default function FootLinks() {
    return (
        <div className="flex space-x-4">
            {links.map((link) => (
                <Link
                    key={link.id}
                    href={link.href}
                    className="text-white hover:text-yellow-400 transition duration-300 text-2xl"
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
}
