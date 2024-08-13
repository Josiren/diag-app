import type { Metadata } from "next";
import { montserrat } from "@/app/ui/fonts";
import "./globals.css";
import TopNav from "@/app/ui/nav/topnav";
import Footer from "@/app/ui/footer/footer";

export const metadata: Metadata = {
  title: "DIAGNOST46 | Автосервис",
  description: "The project Car Autoservice focuses on providing comprehensive automotive maintenance and repair services to ensure vehicle performance and safety.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${montserrat.className} min-h-screen`}>
        <div className="flex flex-col items-center m-auto max-w-[1240px]">
          <TopNav />
        </div>
        <main className="flex-col">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
