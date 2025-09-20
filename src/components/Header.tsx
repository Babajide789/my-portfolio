import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"


export default function Header () {
    return(
        <>
            <header className="py-8 xl:py-12 text-black">
                <div className="container mx-auto flex justify-between items-center">
                    {/* LOGO */}
                    <Link href="/">
                        <h1 className="text-4xl font-semibold text-red-800">
                            Babajide <span className="text-accent">,</span>
                        </h1>
                    </Link>

                    {/* DESKTOP NAV & LINKS, button */}
                    <div className="xl:flex items-center gap-8">
                        <Nav/>

                        <Link href="/contact">
                            <button className="cursor-pointer">Hire Me</button>
                        </Link>
                    </div>

                    {/* MOBILE NAV */}
                    <div className="xl:hidden">
                        <MobileNav/>
                    </div>
                    
                </div>
            </header>
        </>
    )
}