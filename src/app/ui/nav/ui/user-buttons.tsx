"use client";

import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import UserRegister from "@/app/ui/nav/ui/user-forms/user-register";
import UserLogin from "@/app/ui/nav/ui/user-forms/user-login";

export default function UserButtons() {
    const [activeButton, setActiveButton] = useState<'register' | 'login' | null>('login');
    const [hoverButton, setHoverButton] = useState<'register' | 'login' | null>('login');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleOpenRegister = () => {
        setActiveButton('register');
        onOpen();
    };
    const handleOpenLogin = () => {
        setActiveButton('login');
        onOpen();
    };

    return (
        <div className="lg:flex gap-2 h-12">
            <button
                className={`h-full rounded-[6px] border-[1px] border-[#102B4E] w-[126px] text-[15px] transition-colors duration-300 
                    ${hoverButton === 'register' ? 'bg-[#1F2937] text-white' : 'bg-transparent text-[#1F2937]'}`}
                onMouseEnter={() => setHoverButton('register')}
                onMouseLeave={() => setHoverButton('login')}
                onClick={handleOpenRegister}
            >
                <p>Регистрация</p>
            </button>
            <UserRegister isOpen={activeButton === 'register' && isOpen} onClose={onClose} />

            <button
                className={`h-full rounded-[6px] border-[1px] border-[#102B4E] w-[114px] text-[15px] transition-colors duration-300 
                    ${hoverButton === 'login' ? 'bg-[#1F2937] text-white' : 'bg-transparent text-[#1F2937]'}`}
                onClick={handleOpenLogin}
            >
                <p>Вход</p>
            </button>
            <UserLogin isOpen={activeButton === 'login' && isOpen} onClose={onClose} />
        </div>
    );
}
