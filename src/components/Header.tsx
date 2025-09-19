import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"


export default function Header () {
    return(
        <>
            <header className="py-8 xl:py-12 text-white">
                <div className="container mx-auto flex justify-between items-center">
                    {/* LOGO */}
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Babajide <span className="text-accent">,</span>
                        </h1>
                    </Link>

                    {/* DESKTOP NAV & LINKS, button */}
                    <div className="xl:flex items-center gap-8">
                        <Nav/>

                        <Link href="/contact">
                            <Button>Hire Me</Button>
                        </Link>
                    </div>

                    {/* MOBILE NAV */}
                    <div className="xl:hidden"></div>
                    
                </div>
            </header>
        </>
    )
}