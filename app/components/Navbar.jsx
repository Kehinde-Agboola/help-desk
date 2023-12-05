import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";
export const Navbar = () => {
  return (
    <div>
      <nav>
        <Image
          src={Logo}
          width={70}
          quality={100}
          placeholder="blur"
          alt="logo"
        />
        <h1>LOGO</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
  );
};
