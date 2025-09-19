import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"


export default function Header () {
    return(
        <>
            <header className="py-8 xl:py-12 text-white">
                <div className="container mx-auto">
                    {/* LOGO */}
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Babajide <span className="text-accent"></span>
                        </h1>
                    </Link>

                    {/* DESKTOP NAV & LINKS */}
                    <div className="hidden xl:flex">
                        <Nav/>

                        <Link href="/contact">
                            <Button>Hire Me</Button>
                        </Link>
                    </div>
                    
                </div>
            </header>
        </>
    )
}