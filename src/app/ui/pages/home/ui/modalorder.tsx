"use client";

import React, { useEffect, useState } from 'react';
import { services } from '@/app/lib/services';

interface ModalOrderProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalOrder: React.FC<ModalOrderProps> = ({ isOpen, onClose }) => {
    const [selectedService, setSelectedService] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const [car, setCar] = useState('');

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
        } else {
            setIsAnimating(false);
        }
    }, [isOpen]);

    const handleChange = (event) => {
        setSelectedService(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (car.trim() === '') {
            alert('Пожалуйста, заполните поле с маркой автомобиля.');
            return;
        }

        setIsAnimating(false);
        setTimeout(onClose, 600);
    };

    const handleBackgroundClick = () => {
        setIsAnimating(false);
        setTimeout(onClose, 600);
    };

    if (!isOpen && !isAnimating) return null;

    return (
        <div
            onClick={handleBackgroundClick}
            className={`fixed w-full h-full m-auto top-0 flex items-center justify-center right-0 z-50 bg-black duration-[0.6s]  ${isAnimating ? 'bg-opacity-70' : 'bg-opacity-0'}`}
        >
            <form
                onClick={(e) => e.stopPropagation()}
                onSubmit={handleSubmit}
                className={`bg-white rounded-[10px] max-w-[871px] w-full min-h-[608px] h-auto text-center px-[86px] flex flex-col text-[#102B4E] transform transition-transform duration-[0.6s] ${isAnimating ? 'translate-y-0' : 'translate-y-[200%]'}`}
            >
                <div className="flex flex-col items-center gap-3.5 mt-[58px]">
                    <h2 className="uppercase text-[24px]">заполните данные</h2>
                    <input
                        type="text"
                        placeholder="введите марку автомобиля"
                        className="placeholder:uppercase h-[53px] w-full rounded-[10px] px-[31px] bg-[#F2F2F2]"
                        value={car}
                        onChange={(e) => setCar(e.target.value)}
                    />
                </div>
                <div className="flex flex-col items-center mt-[19px]">
                    <h2 className="uppercase text-[24px]">выберите услугу или<br />расскажите о проблеме сами</h2>
                    <select
                        value={selectedService}
                        onChange={handleChange}
                        required
                        className="rounded-[10px] h-[53px] bg-[#F2F2F2] uppercase mt-[14px] pl-[31px] w-full"
                    >
                        {services.map((service) => (
                            <option key={service.name} value={service.name} className="text-[15px]">
                                {service.name}
                            </option>
                        ))}
                    </select>
                    <textarea
                        placeholder="Опишите вашу проблему более подробно"
                        className="w-full h-[142px] placeholder:text-[#C9C9C9] text-[17px] rounded-[10px] bg-[#F2F2F2] mt-[33px] px-[31px] py-[18px] resize-none"
                        maxLength="350"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-[39px] self-end uppercase max-w-[179px] text-[14px] h-[37px] w-full text-white bg-[#102B4E] border-transparent border-[1px] hover:border-[#102B43] hover:bg-transparent hover:text-[#102B4E] transition-all duration-300 rounded-[10px]"
                >
                   подтвердить
                </button>
            </form>
        </div>
    );
};

export default ModalOrder;
