import * as React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div>
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
