import React from "react";
import { Link } from "gatsby";

import Navbar from "./components/Navbar";

const about = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      hello about
      <div>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default about;
