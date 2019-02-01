import {mount} from 'react-mounter';
import React from 'react';
import Navbar from '../../Navbar.js';

let B = React.createClass({
  render() {
    return (
      <div className="entryB container-fluid>">
        <Navbar />
        <h2 className="text-center">B-Entry</h2>

        <div className="row">
          <embed style={{height: 800}} className="text-center img-responsive  col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-10 col-sm-10 col-md-10 col-lg-10" src="/entry/b/b-entry.pdf"/>
        </div>

        <br /><br /><br />

      </div>
    );
  }
});

FlowRouter.route('/entry/b', {
  action: function(params, queryParams) {
    mount(B);
  }
});
