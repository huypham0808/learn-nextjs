import Link from "next/link";

async function getTickets() {
    await new Promise(resolve => setTimeout(resolve, 3000)); // Simulate a delay
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0, // use 0  opt out of using the cache
        },
    });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function TicketsList() {
    const tickets = await getTickets();
    return (
        <>
            {tickets.map(ticket => (
                <div className="card my-5" key={ticket.id}>
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority}
                        </div>
                    </Link>
                </div>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets, ya!</p>
            )}
        </>
    )
}
