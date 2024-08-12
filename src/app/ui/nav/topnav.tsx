import Logo from "@/app/ui/nav/ui/logo";
import NavLinks from "@/app/ui/nav/ui/nav-links";
import UserButtons from "@/app/ui/nav/ui/user-buttons";

export default function TopNav() {
    return (
        <section className="flex h-32 items-center justify-between w-full">
            <Logo/>
            <NavLinks/>
            <UserButtons/>
        </section>
    );
}
