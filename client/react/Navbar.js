import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-static-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/" style={{ outline: 0 }}>
              MacGregor
            </a>
          </div>

          <ul className="nav navbar-nav">
            <li id="nav-housecomm">
              <a href="/housecomm" style={{ outline: 0 }}>
                Administrivia
              </a>
            </li>
            <li id="nav-support">
              <a href="/rex" style={{ outline: 0 }}>
                REX
              </a>
            </li>
            <li id="nav-support">
              <a href="/support" style={{ outline: 0 }}>
                Student Support
              </a>
            </li>
            <li id="nav-maccon">
              <a href="/maccon" style={{ outline: 0 }}>
                MacCon
              </a>
            </li>
            <li id="nav-desk">
              <a href="/desk" style={{ outline: 0 }}>
                Movie List
              </a>
            </li>
            <li id="nav-laundry">
              <a
                href="http://laundryview.com/laundry_room.php?lr=1364815"
                style={{ outline: 0 }}
              >
                Laundry
              </a>
            </li>
            <li id="nav-dininghall">
              <a href="/dininghall" style={{ outline: 0 }}>
                Dining Hall
              </a>
            </li>
            <li id="nav-about">
              <a href="/about" style={{ outline: 0 }}>
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
