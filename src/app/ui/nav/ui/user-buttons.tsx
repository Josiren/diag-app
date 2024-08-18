'use client';

import { useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import UserRegister from "@/app/ui/nav/ui/user-forms/ui/register/user-register";
import UserLogin from "@/app/ui/nav/ui/user-forms/ui/login/user-login";

export default function UserButtons() {
    const [hoverButton, setHoverButton] = useState<'register' | 'login' | null>('login');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formType, setFormType] = useState<'register' | 'login' | null>(null);

    const handleOpenRegister = () => {
        setFormType('register');
        onOpen();
    };

    const handleOpenLogin = () => {
        setFormType('login');
        onOpen();
    };

    return (
        <div className="flex gap-2 h-12">
            <button
                className={`h-full rounded-[6px] flex items-center justify-center border-[1px] border-[#102B4E] w-[126px] text-[15px] transition-colors duration-300 
                    ${hoverButton === 'register' ? 'bg-[#1F2937] text-white' : 'bg-transparent text-[#1F2937]'}`}
                onMouseEnter={() => setHoverButton('register')}
                onMouseLeave={() => setHoverButton('login')}
                onClick={handleOpenRegister}
            >
                <p>Регистрация</p>
            </button>

            <button
                className={`h-full rounded-[6px] flex items-center justify-center border-[1px] border-[#102B4E] w-[114px] text-[15px] transition-colors duration-300 
                    ${hoverButton === 'login' ? 'bg-[#1F2937] text-white' : 'bg-transparent text-[#1F2937]'}`}
                onClick={handleOpenLogin}
            >
                <p>Вход</p>
            </button>

            {formType === 'register' ? (
                <UserRegister isOpen={isOpen} onClose={onClose} />
            ) : (
                <UserLogin isOpen={isOpen} onClose={onClose} />
            )}
        </div>
    );
}
