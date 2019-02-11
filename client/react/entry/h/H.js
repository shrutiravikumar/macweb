import {mount} from 'react-mounter';
import React from 'react';
import Navbar from '../../Navbar.js';

let H = React.createClass({
  render() {
    return (
      <div className="entryH container-fluid">
        <Navbar />
          H Entry no longer uses this page for their website. See <a href="/entry/h/index.html">here</a>
      </div>
    );
  }
});
