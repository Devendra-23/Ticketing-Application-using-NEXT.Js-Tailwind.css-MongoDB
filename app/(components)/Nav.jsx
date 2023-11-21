import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-start space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/Ticketpage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">dev6Gatsby@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
