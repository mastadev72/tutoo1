import * as React from "react";
import { Link } from "gatsby";
import Navbar from "././components/Navbar";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <h1>Hello world!</h1>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Link to="/company/history">Company History</Link>
      </div>
    </div>
  );
}
