import {services} from "@/app/lib/data/services";

export default function Services() {
    return (
        <section className="bg-[#102B4E] flex flex-col items-center h-[566px] justify-center">
            <h1 className="text-2xl text-white">Предоставляемые услуги</h1>
            <div className="flex items-center h-[190px] mt-[72px] mb-[58px] justify-between w-full max-w-[1240px]">
                {services.map((service) => (
                    <div key={service.name} className="flex flex-col items-center justify-center w-[216px] h-full bg-white rounded-[10px]">
                        <p className="uppercase text-center text-sm text-[#102B4E]">
                            {service.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
