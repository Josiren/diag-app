"use client"

import { useEffect } from 'react';
import IMask from 'imask';

export default function Order() {
    useEffect(() => {
        IMask(document.getElementById('phone-mask'), {
            mask: '+{7} (000) 000 - 00 - 00',
        });
    }, []);

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
                    <input
                        id="phone-mask"
                        className="h-[53px] text-center rounded-[10px] w-full mt-[53px]"
                        placeholder="+ 7 (999) 999 - 99 - 99"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full h-[47px] mt-[53px] text-center text-[#102B4E] hover:border-[1px] hover:border-white rounded-[10px] border-transparent hover:bg-transparent bg-white hover:text-white transition-all duration-300"
                    >
                        Записаться
                    </button>
                </form>
            </div>
        </section>
    );
}
