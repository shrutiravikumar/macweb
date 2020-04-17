import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-static-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand no-outline" href="/">
              MacGregor
            </a>
          </div>

          <ul className="nav navbar-nav">
            <li id="nav-facilities">
              <a href="/facilities">Explore</a>
            </li>
            <li id="nav-residents">
              <a href="/resident_info">Resident Info</a>
            </li>
            <li id="nav-support">
              <a href="/support">Student Support</a>
            </li>
            <li id="nav-laundry">
              <a
                href="https://laundryview.com/home/74/1364815"
                target="_blank"
              >
                Laundry
              </a>
            </li>
            <li id="nav-dininghall">
              <a href="/dininghall">Calendar</a>
            </li>
            <li id="nav-about">
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
