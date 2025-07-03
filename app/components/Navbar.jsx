import Image from "next/image";
import Link from "next/link";
import Logo from "./help-desk_logo.png"; // Adjust the path as necessary

export default function Navbar() {
    return (
        <nav>
            {/* <h1>Help Desk App</h1> */}
            <Image
                src={Logo}
                width={70}
                quality={100}
                placeholder="blur" />

            <Link href="/">Dash board</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    )
}
