import TopNav from "@/app/ui/nav/topnav";
import Services from "@/app/ui/pages/home/services";
import Order from "@/app/ui/pages/home/order";
import Footer from "@/app/ui/footer/footer";

export default function Home() {
  return (
      <div className="l-main">
          <Services/>
          <Order/>
      </div>
  );
}
