import React from "react";
import TicketList from "./TicketList";

export default function Ticket() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open Tickets.</small>
          </p>
        </div>
      </nav>
      <TicketList />
    </main>
  );
}
