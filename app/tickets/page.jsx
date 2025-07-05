import { Suspense } from "react";
import TicketsList from "./TicketsList";
import Loading from "../loading";

export default function Tickets() {
    return (
        <main>
            <nav>
                <h2>Tickets</h2>
                <p>
                    <small>Current open tickets</small>
                </p>
            </nav>
            <Suspense fallback={<Loading />}>
                <TicketsList />
            </Suspense>
        </main>
    )
}
