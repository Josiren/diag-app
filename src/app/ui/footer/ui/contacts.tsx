import FooterLinks from "@/app/ui/footer/ui/footerlinks";

export default function Contacts() {
    return (
        <div className="flex justify-between items-center h-48 max-w-[1240px] m-auto w-full">
            <div className="flex flex-col">
                <h3 className="text-white text-[16px] font-bold">Контакты</h3>
                <div className="text-[14px] mt-[8.5px] flex flex-col gap-[14px]">
                    <p className="text-[14px] text-white">Если речь идет об автомобилях, давайте поговорим.</p>
                    <p className="text-[14px] text-[#DFDFDF]">ул. Полянская, 20, Курск, Курская обл., 305026</p>
                </div>
            </div>
            <div className="flex flex-col gap-2.5 text-[14px] text-right text-white">
                <a href="tel:8-(995)-083-65-69">8-(995)-083-65-69</a>
                <a href="mailto:diagnostic_46@mail.ru">diagnostic_46@mail.ru</a>
                    <FooterLinks/>
            </div>
        </div>
    );
}
