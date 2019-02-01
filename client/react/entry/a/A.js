import {mount} from 'react-mounter';
import React from 'react';
import Navbar from '../../Navbar.js';

let A = React.createClass({
  render() {
    return (
      <div className="entryA container-fluid>">
        <Navbar />
        <h2 className="text-center">A-Entry</h2>

        <div className="row">
          <embed style={{height: 800}} className="text-center embed-responsive col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-10 col-sm-10 col-md-10 col-lg-10" src="/entry/a/a-entry.pdf"/>
        </div>
        <div className="row"/>

        <br /><br /><br />

      </div>
    );
  }
});

FlowRouter.route('/entry/a', {
  action: function(params, queryParams) {
    mount(A);
  }
});
