"use client";

import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import Link from "next/link";

export default function Logo() {
    const handleHomeClick = () => {
        const navLinks = document.querySelectorAll('.navLink');
        navLinks.forEach(link => link.classList.remove('before:w-full'));
    };

    return (
        <div className="lg:flex">
            <div className="flex gap-2.5 items-center">
                <Image
                    src="/logo.png"
                    width={45}
                    height={40}
                    className="hidden md:block"
                    alt="Screenshots of the dashboard project showing desktop version"
                />
                <Link
                    href="/"
                    className="navLink"
                    onClick={handleHomeClick}
                >
                    <p className={`${montserrat.className} antialiased font-semibold text-2xl`}>
                        Автосервис
                    </p>
                </Link>
            </div>
        </div>
    );
}
