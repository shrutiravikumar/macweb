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
            <li>
              <a className="active" href="/entry/j/about">
                J Entry
              </a>
            </li>
            <li>
              <a href="/entry/j/residents">Meet the Residents</a>
            </li>
            <li>
              <a href="/entry/j/traditions">Entry Traditions</a>
            </li>
            <li>
              <a href="/entry/j/photos">Photos</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
