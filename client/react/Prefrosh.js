import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Navbar from './Navbar.js';

Meteor.subscribe('prefrosh')
const PrefroshEvents = new Mongo.Collection("prefrosh")

class Prefrosh extends TrackerReact(Component) {
  render() {

    let prefroshEvents = PrefroshEvents.find({}).fetch().map((event) => {
      return (
        <tr key={event.name+event.time}>
          <td style={{width:'15%'}}>{event.name}</td>
          <td style={{width:'5%'}}>{event.day}</td>
          <td style={{width:'15%'}}>{event.time}</td>
          <td style={{width:'15%'}}>{event.location}</td>
          <td style={{width:'35%'}}>{event.description}</td>
        </tr>
      );
    });

    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Move-In Information</h2>
          <p>Over the summer, all freshmen will be assigned a TEMPORARY room to move into once they arrive at MIT for orientation. This means that you should
             ideally not unpack all of your belongings, as you will be moving from your temporary room to your final room for the semester on the morning of Thursday 8/29. Why
             does MIT do this? This is because we emphasize the importance of building strong communities within MIT's dorms, and thus allow students to explore living groups across
             campus through <a href="https://mitguidetoresidences.mit.edu/first-year-housing-information-what-do-and-when">REX</a> to help freshmen find a place they truly enjoy. After exploring living groups accross campus, students can choose to <a href="https://mitguidetoresidences.mit.edu/first-year-housing-information-what-do-and-when">FYRE</a> out of their temporary dorm
             and switch to another dorm by filling out a form prior to Wednesday 8/28. Additionally, each dorm has a means of organizing people within the dorm to better form communities.
             MacGregor house uses a process called EASE to help freshmen explore entries and move to their final room.
          </p>

          <br/>

          <h2>What is EASE?</h2>
          <p>MacGregor house is primarily organized into entries A-J, excluding i(because i is imaginary). You can find some information about each
             entry compiled by recent residents on this website's <a href="/">homepage</a> by clicking on the corresponding entry on the map. EASE, which stands for Exploration And Selection of Entry, is
             the current process used by MacGregor to help freshmen meet current residents of each entry and decide which entry they would like to live in. EASE takes place on
             Wednesday 8/28, and freshmen move out of their temporary rooms and into their final rooms the next morning.</p>
          <br/>

          <h2>How does EASE work?</h2>
          <p>On Wednesday 8/28, all freshmen that chose to stay in MacGregor or FYREd into MacGregor will meet in the MacGregor dining hall, where dinner will be served. Freshmen will then
            visit each entry in MacGregor, where they can mingle with current residents of that entry to get to know what it's like to live there. There will also be two free roam periods
            where freshmen can return to entries that they were interested in to get to know them better, once after visiting the first 6 entries, and once after visiting all the entries. Finally, freshmen will reconvene in the dining
            hall, where they will then submit a ranking on all the entries based on which one they want to live in. Additionally, freshmen will supply additional information about rooms they would like, such as loudness, proximity to the bathroom/kitchen,
            sleeping habits, and other information which will be used by entry chairs to fit them into the best room for them within their entry. On Thursday 8/29, freshmen will
            move out of their temporary rooms by 8:00 am, and store their belongings in the MacGregor dining hall while the rooms are cleaned. Upperclassmen will be around to help move
            and watch belongings to make this as easy as possible and ensure that everyone's belongings are safe. After a few hours, freshmen will then move into their final room and get settled.
          </p>
          <br/>


          <h2>MacG REX Event List</h2>

          <p>MIT dorm communities hold events before and during orientation to help freshmen explore living groups across campus, and help create bonds between students.
            REX events will occur from Saturday August 24th to Thursday August 29th. Below is a
            list of all the REX events that will be held by MacGregor in 2019.
          </p>
          <br/>

          <table className="table table-condensed table-striped">
            <thead>
              <tr>
                <th>Event</th>
                <th>Day</th>
                <th>Time</th>
                <th>Location</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {prefroshEvents}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

export default Prefrosh;