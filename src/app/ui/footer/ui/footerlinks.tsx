import Image from "next/image";
import Link from "next/link";

// Icons
import GoogleIcon from "../../../../../public/footer/icons/google.svg";
import MailIcon from "../../../../../public/footer/icons/mail.svg";
import VkIcon from "../../../../../public/footer/icons/vk.svg";
import WhatsAppIcon from "../../../../../public/footer/icons/whats_app.svg";
import TelegramIcon from "../../../../../public/footer/icons/telegram.svg";

const links = [
    {
        href: "mailto:diagnostic46a@gmail.com",
        icon: GoogleIcon,
        alt: "Google",
    },
    {
        href: "mailto:diagnostic46a@gmail.com",
        icon: MailIcon,
        alt: "Mail",
    },
    {
        href: "https://vk.com/diagnost_46",
        icon: VkIcon,
        alt: "VK",
    },
    {
        href: "https://wa.link/2wx385",
        icon: WhatsAppIcon,
        alt: "WhatsApp",
    },
    {
        href: "https://t.me/+79950836569",
        icon: TelegramIcon,
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
                    className="w-[25px] flex justify-center items-center h-[25px] rounded-full bg-white"
                >
                    <Image src={link.icon} alt={link.alt} width={15} height={15} />
                </Link>
            ))}
        </div>
    );
}
