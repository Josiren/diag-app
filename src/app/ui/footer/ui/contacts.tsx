import FooterLinks from "@/app/ui/footer/ui/footerlinks";

export default function Contacts() {
    return (
        <div className="flex justify-between items-center h-48 max-w-[1240px] m-auto w-full">
            <div className="flex flex-col">
                <h3 className="text-white text-[16px] font-bold">Контакты</h3>
                <p className="text-[13px] text-white mt-[8.5px]">Если речь идет об автомобилях, давайте поговорим.</p>
                <p className="text-[13px] text-[#DFDFDF] mt-[14px]">пр. Ленинского Комсомола, 15, Курск, 305026</p>
            </div>
            <div className="flex flex-col gap-2.5">
                <a href="tel:8-(995)-083-65-69" className="text-[13px] text-right text-white">8-(995)-083-65-69</a>
                <a href="mailto:diagnostic_46@mail.ru" className="text-[13px] text-right text-white">diagnostic_46@mail.ru</a>
                    <FooterLinks/>
            </div>
        </div>
    );
}
{/*<div className="flex justify-between">*/}
{/*    <a href="mailto:diagnostic46a@gmail.com" className="w-[25px] flex justify-center items-centerh-[25px] rounded-full bg-white border border-transparent transition-all duration-300 hover:bg-transparent hover:border-white">*/}
{/*        <Image*/}
{/*            src={GoogleIcon}*/}
{/*            alt="Google"*/}
{/*            width={15}*/}
{/*            height={15}*/}
{/*        />*/}
{/*    </a>*/}
{/*    <a href="mailto:diagnostic_46@mail.ru" className="w-[25px] flex justify-center items-centerh-[25px] rounded-full bg-white border border-transparent transition-all duration-300 hover:bg-transparent hover:border-white">*/}
{/*        <Image*/}
{/*            src={MailIcon}*/}
{/*            alt="Mail"*/}
{/*            width={15}*/}
{/*            height={15}*/}
{/*        />*/}
{/*    </a>*/}
{/*    <a href="https://vk.com/diagnost_46" className="w-[25px] flex justify-center items-center h-[25px] rounded-full bg-white border border-transparent transition-all duration-300 hover:bg-transparent hover:border-white">*/}
{/*        <Image*/}
{/*            src={VkIcon}*/}
{/*            alt="VK"*/}
{/*            width={15}*/}
{/*            height={15}*/}
{/*        />*/}
{/*    </a>*/}
{/*    <a href="https://wa.link/2wx385" className="w-[25px] flex justify-center items-center h-[25px] rounded-full bg-white border border-transparent transition-all duration-300 hover:bg-transparent hover:border-white">*/}
{/*        <Image*/}
{/*            src={WhatsAppIcon}*/}
{/*            alt="WhatsApp"*/}
{/*            width={15}*/}
{/*            height={15}*/}
{/*        />*/}
{/*    </a>*/}
{/*    <a href="https://t.me/+79950836569" className="w-[25px] flex justify-center items-center h-[25px] rounded-full bg-white border border-transparent transition-all duration-300 hover:bg-transparent hover:border-white">*/}
{/*        <Image*/}
{/*            src={TelegramIcon}*/}
{/*            alt="Telegram"*/}
{/*            width={15}*/}
{/*            height={15}*/}
{/*        />*/}
{/*    </a>*/}
{/*</div>*/}
