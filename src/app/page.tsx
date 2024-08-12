import Image from "next/image";
import { russoOne } from "@/app/ui/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex h-32">
          <div className="lg:flex gap-2.5 items-center">
              <Image
                  src="/logo.png"
                  width={45}
                  height={40}
                  className="hidden md:block"
                  alt="Screenshots of the dashboard project showing desktop version"
              />
              <strong className={`{\`${russoOne.className} text-2xl`}>
                  Автосервис
              </strong>
         </div>
      </div>
    </main>
  );
}
