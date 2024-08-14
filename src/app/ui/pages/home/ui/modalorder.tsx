"use client";

import React, { useState, useEffect } from 'react';
import { Modal, ModalContent, Button } from "@nextui-org/react";
import { services } from "@/app/lib/services";

export default function ModalOrder({ isOpen, onClose }) {
    const [selectedService, setSelectedService] = useState('');
    const [car, setCar] = useState('');

    const handleChange = (event) => {
        setSelectedService(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (car.trim() === '') {
            alert('Пожалуйста, заполните поле с маркой автомобиля.');
            return;
        }

        setTimeout(onClose, 600);
    };

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onClose}
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
            shouldBlockScroll={false}
            hideCloseButton={true}
            classNames={{
                backdrop: "bg-black/50 backdrop-opacity-40",
            }}
        >
            <ModalContent className={`bg-white rounded-[10px] max-w-[871px] w-full min-h-[608px] 
                h-auto text-center px-[86px] flex flex-col text-[#102B4E]`}
            >
                {(onClose) => (
                    <>
                        <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
                            <div className="flex flex-col items-center gap-3.5 mt-[58px]">
                                <div className="uppercase text-[24px]">заполните данные</div>
                                <input
                                    type="text"
                                    placeholder="введите марку автомобиля"
                                    className="placeholder:uppercase h-[53px] w-full rounded-[10px] px-[31px] bg-[#F2F2F2]"
                                    value={car}
                                    onChange={(e) => setCar(e.target.value)}
                                />
                                <div className="flex flex-col w-full items-center mt-[19px]">
                                    <h2 className="uppercase text-[24px]">выберите услугу или<br />расскажите о проблеме сами</h2>
                                    <select
                                        value={selectedService}
                                        onChange={handleChange}
                                        required
                                        className="rounded-[10px] h-[53px] bg-[#F2F2F2] uppercase mt-[14px] pl-[31px] w-full"
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
                                        maxLength="350"
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
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
