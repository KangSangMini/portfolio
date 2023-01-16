import React from "react";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <div className="header">
        <ul className="nav">
          <li>
            <Link to="main" className="Link">
              main/
            </Link>
          </li>
          <li>
            <Link to="skill" className="Link">
              skill/
            </Link>
          </li>
          <li>
            <Link to="project" className="Link">
              projects/
            </Link>
          </li>
          <li>
            <Link to="contact" className="Link">
              contact/
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
