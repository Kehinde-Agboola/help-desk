import React from "react";
import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

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
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
