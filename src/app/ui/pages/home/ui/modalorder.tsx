"use client";

import React, { useState } from 'react';
import {Button, useDisclosure} from "@nextui-org/react";
import { services } from "@/app/lib/data/services";
import FormsLayout from "@/app/ui/nav/ui/user-forms/layout";

interface ModalOrderProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalOrder: React.FC<ModalOrderProps> = ({ isOpen, onClose }) => {
    const [selectedService, setSelectedService] = useState('');
    const [car, setCar] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedService(event.target.value);
    };

    return (
        <FormsLayout
            isOpen={isOpen}
            onClose={onClose}
            size={"4xl"}
            motionProps={{
                variants: {
                    enter: {
                        y: "0",
                        transition: {
                            duration: 0.6,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        y: "200%",
                        transition: {
                            duration: 0.6,
                            ease: "easeIn",
                        },
                    },

                }
            }}
        >
            <form
                className="bg-white rounded-[10px] min-h-[608px] h-auto text-center px-[86px] flex flex-col text-[#102B4E]"
                onClick={(e) => e.stopPropagation()} >
                <div className="flex flex-col items-center gap-3.5 mt-[58px]">
                    <div className="uppercase text-[20px]">заполните данные</div>
                    <input
                        type="text"
                        required
                        placeholder="введите марку автомобиля"
                        className="placeholder:uppercase text-[15px] h-[53px] w-full rounded-[10px] px-[31px] bg-[#F2F2F2]"
                        value={car}
                        onChange={(e) => setCar(e.target.value)}
                    />
                    <div className="flex flex-col w-full items-center mt-[19px]">
                        <h2 className="uppercase text-[20px]">выберите услугу или<br />расскажите о проблеме сами</h2>
                        <select
                            value={selectedService}
                            onChange={handleChange}
                            required
                            className="rounded-[10px] text-[15px] h-[53px] bg-[#F2F2F2] uppercase mt-[14px] pl-[31px] w-full"
                        >
                            <option value="" disabled className="text-[15px]">Выберите услугу</option>
                            {services.map((service) => (
                                <option key={service.name} value={service.name} className="text-[15px]">
                                    {service.name}
                                </option>
                            ))}
                        </select>
                        <textarea
                            placeholder="Опишите вашу проблему более подробно"
                            className="w-full h-[142px] placeholder:text-[#C9C9C9] text-[17px] rounded-[10px] bg-[#F2F2F2] mt-[33px] px-[31px] py-[18px] resize-none"
                            maxLength={350}
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    className="mt-[39px] uppercase max-w-[179px] flex text-[14px] h-[37px] w-full text-white bg-[#102B4E] border-transparent
            border-[1px] hover:border-[#102B43] hover:bg-transparent hover:text-[#102B4E] transition-all duration-300 rounded-[10px] ml-auto"
                >
                    подтвердить
                </Button>
            </form>
        </FormsLayout>
    );
}

export default ModalOrder;
