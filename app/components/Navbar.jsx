import Link from "next/link";
export default function Navbar() {
    return (
        <nav>
            <Link href="/">Dash board</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    )
}
