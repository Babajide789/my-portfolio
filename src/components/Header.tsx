import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"


export default function Header () {
    return(
        <>
            <header className="py-2 xl:py-4 text-black">
                <div className="container mx-auto flex justify-between items-center">
                    {/* LOGO */}
                    <Link href="/">
                        <h1 className="text-4xl font-semibold text-red-800">
                            Babajide <span className="text-black">,</span>
                        </h1>
                    </Link>

                    {/* DESKTOP NAV & LINKS, button */}
                    <div className="xl:flex items-center gap-8">
                        <Nav/>

                        <Link href="/contact">
                            <button
                                className="
                                px-6 py-2 rounded-full font-medium
                                bg-primary text-primary-foreground
                                shadow-md transition-all duration-300
                                hover:bg-primary/90 hover:shadow-lg hover:scale-105
                                focus:outline-none focus:ring-2 focus:ring-primary/50
                                "
                            >
                                Hire Me
                            </button>
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