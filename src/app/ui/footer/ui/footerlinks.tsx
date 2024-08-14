"use client";

import Link from "next/link";

// Icons
import WhatsAppIcon from "@icons/footer/icons/WhatsAppIcon";
import MailIcon from "@icons/footer/icons/MailIcon";
import VkIcon from "@icons/footer/icons/VkIcon";
import GoogleIcon from "@icons/footer/icons/GoogleIcon";
import TelegramIcon from "@icons/footer/icons/TelegramIcon";

const links = [
    {
        href: "mailto:diagnostic46a@gmail.com",
        icon: <GoogleIcon className="group-hover:fill-white transition-colors duration-300" />,
        alt: "Google",
    },
    {
        href: "mailto:diagnostic46a@gmail.com",
        icon: <MailIcon className="group-hover:fill-white transition-colors duration-300" />,
        alt: "Mail",
    },
    {
        href: "https://vk.com/diagnost_46",
        icon: <VkIcon className="group-hover:fill-white transition-colors duration-300" />,
        alt: "VK",
    },
    {
        href: "https://wa.link/2wx385",
        icon: <WhatsAppIcon className="group-hover:fill-white transition-colors duration-300" />,
        alt: "WhatsApp",
    },
    {
        href: "https://t.me/+79950836569",
        icon: <TelegramIcon className="group-hover:fill-white transition-colors duration-300" />,
        alt: "Telegram",
    },
];

export default function FooterLinks() {
    return (
        <div className="flex justify-between">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    className="w-[25px] flex justify-center items-center h-[25px] hover:bg-[#102B4E] transition-background duration-300 rounded-full bg-white group"
                >
                    {link.icon}
                </Link>
            ))}
        </div>
    );
}
