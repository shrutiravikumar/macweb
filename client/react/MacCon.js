import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Navbar from './Navbar.js';

const HARDCODED = false;
const HARDCODERETURN = 'CLOSED FOR SPRING BREAK';

const OFFSET = 4 // Eastern time accounting for DST

const OPEN = 'open'
const CLOSED = 'closed'

const HOURS = [
  {close:17, open:9}, //sunday
  {close:17, open:9}, //monday
  {close:17, open:9}, //tuesday
  {close:17, open:9}, //wednesday
  {close:17, open:9}, //thursday
  {close:17, open:9}, //friday
  {close:17, open:9} //saturday
]

let MacCon = React.createClass({
  getInitialState() {
    return {
      status: HARDCODERETURN
    };
  },

  updateMacConStatus() {
    let datetime = new Date()

    day = datetime.getDay()
    hour = datetime.getUTCHours() - OFFSET
    when = HOURS[day];

    let prediction =  (hour < when.close || hour >= when.open) ? OPEN: CLOSED
    this.setState({status: prediction});
  },

  render() {
    return (
      <div>
        <Navbar />
        <div id="maccon" className="container">
          <h2>MacCon is...</h2>
          <div id="ismacconopen" className={HARDCODED?'rainbow':this.state.status}>
            {this.state.status}
          </div>
        </div>
      </div>
    )
  },

  componentDidMount() {
    if (!HARDCODED) {
      this.updateMacConStatus();
      setInterval(this.updateMacConStatus,60000);
    }
  },
});

export default MacCon;