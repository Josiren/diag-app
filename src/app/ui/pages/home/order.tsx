"use client";

import { useEffect, useState } from 'react';
import IMask from 'imask';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import ModalOrder from "@/app/ui/pages/home/ui/modalorder";

export default function Order() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [phone, setPhone] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const phoneInput = document.getElementById('phone-mask');
        const mask = IMask(phoneInput, {
            mask: '+{7} (000) 000 - 00 - 00',
            dispatch: function(appended, dynamicMasked) {
                const number = (dynamicMasked.value + appended).replace(/\D/g, '');
                return dynamicMasked.compiledMasks.find(function(m) {
                    return number.startsWith(m.startsWith) && number.length <= m.maxLength;
                });
            },
        });

        mask.on('accept', function() {
            const isValid = mask.value.replace(/\D/g, '').length === 11;
            setIsPhoneValid(isValid);
            setAlertMessage(isValid ? '' : 'Пожалуйста, введите полный номер телефона.');
            setPhone(mask.value);
            setIsButtonDisabled(!isValid);
        });
    }, []);

    const handleOpenModal = () => {
        if (!isPhoneValid) {
            setAlertMessage('Пожалуйста, введите полный номер телефона.');
            return;
        }

        setModalOpen(true);
        const $scrollableElement = document.querySelector('body');
        disablePageScroll($scrollableElement);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        const $scrollableElement = document.querySelector('body');
        enablePageScroll($scrollableElement);
        setIsButtonDisabled(true);
        setTimeout(() => setIsButtonDisabled(false), 200);
    };

    return (
        <section className="flex flex-col m-auto max-w-[1240px] h-[689px] justify-center">
            <h1 className="text-2xl text-[#102B4E] text-center">Записаться на ремонт</h1>
            <div className="flex gap-[30px] mt-[55px] h-[483px]">
                <div className="grid grid-cols-2 grid-rows-2 gap-x-[17px] gap-y-[32px]">
                    <div className="flex flex-col bg-[#102B4E] rounded-[10px] p-[25px] gap-[15px]">
                        <h2 className="text-[32px] text-[#E5E5E5]">01</h2>
                        <p className="text-white text-[13px] leading-[30px]">Выберите модель вашего автомобиля</p>
                    </div>
                    <div className="flex flex-col bg-[#102B4E] rounded-[10px] p-[25px] gap-[15px]">
                        <h2 className="text-[32px] text-[#E5E5E5]">02</h2>
                        <p className="text-white text-[13px] leading-[30px]">Узнайте, какая услуга вам именно нужна, либо опишите проблему</p>
                    </div>
                    <div className="flex flex-col bg-[#102B4E] rounded-[10px] p-[25px] gap-[15px]">
                        <h2 className="text-[32px] text-[#E5E5E5]">03</h2>
                        <p className="text-white text-[13px] leading-[30px]">Ознакомитесь с местоположением сервиса на карте</p>
                    </div>
                    <div className="flex flex-col bg-[#102B4E] rounded-[10px] p-[25px] gap-[15px]">
                        <h2 className="text-[32px] text-[#E5E5E5]">04</h2>
                        <p className="text-white text-[13px] leading-[30px]">Вы всё сделали, теперь заполните данную форму</p>
                    </div>
                </div>
                <form className="flex flex-col grow-0 w-full bg-[#102B4E] rounded-[10px] px-[52px] items-center justify-center">
                    <h3 className="font-bold text-[20px] text-white">Быстро и Чётко</h3>
                    <p className="text-[16px] text-white mt-[25px]">Введите номер телефона</p>
                    {alertMessage && <div aria-live="assertive" className="alert text-white mt-5 font-medium">{alertMessage}</div>}
                    <input
                        id="phone-mask"
                        className="h-[53px] text-center rounded-[10px] w-full mt-[53px]"
                        placeholder="+ 7 (999) 999 - 99 - 99"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={handleOpenModal}
                        disabled={isButtonDisabled}
                        className={`w-full h-[47px] mt-[53px] text-center text-[#102B4E] rounded-[10px] border-transparent
                         transition-all duration-300 
                         ${isButtonDisabled ? 'cursor-not-allowed bg-white bg-opacity-70 ' : 'bg-white hover:border-[1px] hover:border-white ' +
                            'hover:bg-transparent hover:text-white'}`}
                    >
                        Записаться
                    </button>
                </form>
            </div>

            <ModalOrder isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    );
}
