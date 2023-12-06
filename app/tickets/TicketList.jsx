import Link from "next/link";
import React from "react";

async function getTickets() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 2,
    },
  });
  //   console.log(res.json);
  return res.json();
}
export default async function TicketList() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const tickets = await getTickets();
  return (
    <div>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>

            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}

      {tickets.lenght === 0 && (
        <p className="text-center text-green-600">
          There are no open tickets, Yay!
        </p>
      )}
    </div>
  );
}
