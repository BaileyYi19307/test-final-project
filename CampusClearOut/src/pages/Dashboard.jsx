import React from "react";
import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <div>
      <header>
        <h1>Dashboard Page</h1>
      </header>
      <main>
        <p> This is my dashboard page</p>
        <nav>
          <Link to="/dashboard/mylistings">My Listings</Link> |
          <Link to="/dashboard/myrequests">My Requests</Link>
        </nav>
      </main>
    </div>
  );
}
