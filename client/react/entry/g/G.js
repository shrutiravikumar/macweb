import {mount} from 'react-mounter';
import React from 'react';
import Navbar from '../../Navbar.js';

let G = React.createClass({
  render() {
    return (
      <div className="entryG container-fluid">
        <Navbar />
        <h2 className="text-center">Gentry</h2>
        <h4 className="text-center">A place of late-night gaming, sick jam sessions, and general tomfoolery</h4>

        <div className="text-center">
          <div className="row">
            <img className="img-responsive col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-6 col-sm-6 col-md-6 col-lg-6" src="/entry/g/christmas.jpg"/>
          </div>
          <p>Welcome to G-entry, a formidable burnt orange! We are colloquially referred to as the “gents”. Some of our activities include:</p>
          <br/>


          <div id="activities" className="center-block row">
            <div className="left col-xs-12 col-sm-12 col-md-offset-1 col-lg-offset-1 col-md-3 col-lg-3">
              <br/><br/><br/>
              <p>Dressing to Impress</p>
              <p>Food Challenges</p>
              <p>Karoake</p>
              <p>Making and Answering Surveys</p>
              <p>Procrastinating</p>
              <p>Ordering Food</p>
              <p>(Especially Boba)</p>
            </div>
            <div className="left col-xs-offset-2 col-sm-offset-2 col-md-offset-0 col-xs-8 col-sm-8 col-lg-4 col-md-4">
              <img id="smash2" width="100%" src="/entry/g/GAEMS.jpg" />
              <br/><br/>
              <img id="dnd2" width="100%" src="/entry/g/yamatos.JPG" />
            </div>
            <div className="left col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <br/><br/><br/>
              <p>Super Smash Bros</p>
              <p>Watching Movies</p>
              <p>Chillin in G31</p>
              <p>Sushi</p>
              <p>Fruit Snacks</p>
              <p>Snacks of the Non-fruit Variety</p>
              <p>Hanging out with H-Entry</p>
            </div>
          </div>


        </div>
        <br /><br /><br />

      </div>
    );
  }
});

FlowRouter.route('/entry/g', {
  action: function(params, queryParams) {
    mount(G);
  }
});
