import {mount} from 'react-mounter';
import React from 'react';
import Navbar from '../../Navbar.js';

let F = React.createClass({
  render() {
    return (
      <div className="entryF container-fluid>">
        <Navbar />
        <h2 className="text-center">F-Entry</h2>

        <div className="row">
          <embed style={{height: 800}} className="text-center img-responsive  col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 col-xs-10 col-sm-10 col-md-10 col-lg-10" src="/entry/f/f-entry.pdf"/>
        </div>

        <br /><br /><br />

      </div>
    );
  }
});

FlowRouter.route('/entry/f', {
  action: function(params, queryParams) {
    mount(F);
  }
});
