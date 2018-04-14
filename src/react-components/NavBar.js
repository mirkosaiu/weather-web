import React from 'react';

import 'Css/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => (

  <div className="nav-bar">
    <div className="nav-bar-content">


        <div className="nav-bar-left">
          <div className="nav-bar-element">
            <span className="brand">Weather.</span>
          </div>
        </div>

        <div className="nav-bar-right">

        <Link to="/">
          <div className="nav-bar-element link">
            Home
          </div>
        </Link>

        <Link to="/statistics">
          <div className="nav-bar-element link">
            Statistics
          </div>
        </Link>

        <Link to="/archive">
          <div className="nav-bar-element link">
            Archive
          </div>
        </Link>

        <Link to="/the-station">
          <div className="nav-bar-element link">
            The station
          </div>
        </Link>

      </div>

    </div>
  </div>

);

export default NavBar;
