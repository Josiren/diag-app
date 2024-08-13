"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";
import clsx from "clsx";
import { montserrat } from "@/app/ui/fonts";
import { useState } from "react";

const links = [
    {
        name: 'О нас',
        href: '/about',
    },
    {
        name: 'Контакты',
        href: '/contacts',
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(pathname);

    return (
        <div className="lg:flex gap-x-12">
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        onMouseEnter={() => setActiveLink(link.href)}
                        onMouseLeave={() => setActiveLink(pathname)}
                        className={clsx(
                            "text-[#1F2937] font-medium text-[16px] relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[1.5px] before:bg-[#1F2937] before:rounded-[3px] before:transition-all before:duration-300 navLink",
                            {
                                "before:w-full": activeLink === link.href,
                                "before:w-0": activeLink !== link.href,
                            }
                        )}
                    >
                        <p className={montserrat.className}>
                            {link.name}
                        </p>
                    </Link>
                );
            })}
        </div>
    );
}
