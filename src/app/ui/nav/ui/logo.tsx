"use client";

import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";
import LogoIcon from "@icons/header/LogoIcon";

export default function Logo() {
    const handlerHomeClick = () => {
        const navLinks = document.querySelectorAll('.navLink');
        navLinks.forEach(link => link.classList.remove('before:w-full'));
    };

    return (
        <div className="lg:flex">
            <div className="flex gap-2.5 items-center">
                <LogoIcon/>
                <Link
                    href="/"
                    className="navLink"
                    onClick={handlerHomeClick}
                >
                    <p className={`${montserrat.className} antialiased font-semibold text-2xl`}>
                        Автосервис
                    </p>
                </Link>
            </div>
        </div>
    );
}
