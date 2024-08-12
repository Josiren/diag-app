"use client";

import { montserrat } from "@/app/ui/fonts";
import { useState } from "react";

export default function UserButtons() {
    const [activeButton, setActiveButton] = useState<'register' | 'login' | null>('login');

    return (
        <div className="lg:flex gap-2 h-12">
            <button
                className={`h-full rounded-[6px] border-[1px] border-[#102B4E] w-[126px] text-[15px] transition-colors duration-300 
                    ${activeButton === 'register' ? 'bg-[#1F2937] text-white' : 'bg-transparent text-[#1F2937]'}`}
                onMouseEnter={() => setActiveButton('register')}
                onMouseLeave={() => setActiveButton('login')}
                onClick={() => setActiveButton('register')}
            >
                <p className={montserrat.className}>
                    Регистрация
                </p>
            </button>
            <button
                className={`h-full rounded-[6px] border-[1px] border-[#102B4E] w-[114px] text-[15px] transition-colors duration-300 
                    ${activeButton === 'login' ? 'bg-[#1F2937] text-white' : 'bg-transparent text-[#1F2937]'}`}
                onMouseEnter={() => setActiveButton('register')}
                onMouseLeave={() => setActiveButton('login')}
                onClick={() => setActiveButton('login')}
            >
                <p className={montserrat.className}>
                    Вход
                </p>
            </button>
        </div>
    );
}
