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
