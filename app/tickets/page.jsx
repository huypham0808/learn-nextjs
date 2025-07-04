import TicketsList from "./TicketsList";

export default function Tickets() {
    return (
        <div>
            <nav>
                <h2>Tickets</h2>
                <p>
                    <small>Current open tickets</small>
                </p>
            </nav>
            <TicketsList />
        </div>
    )
}
