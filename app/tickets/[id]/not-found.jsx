import Link from "next/link";

export default function Notfound() {
    return (
        <main className="text-center">
            <h2 className="text-3xl">We hit a brick wall</h2>
            <p>We could not find a ticket you were looking for</p>
            <p>Go back to the
                <Link href="/tickets">
                    Tickets
                </Link>
            </p>
        </main>
    )
}
