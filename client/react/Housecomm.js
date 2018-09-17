import React, { Component } from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";
import Navbar from "./Navbar.js";

Meteor.subscribe("housecomm");
let HousecommMembers = new Mongo.Collection("housecomm");

class Housecomm extends TrackerReact(Component) {
  render() {
    let housecomm = HousecommMembers.find({})
      .fetch()
      .map(member => {
        return (
          <tr key={member.name + member.role}>
            <td>{member.role}</td>
            <td>{member.name}</td>
            <td>{member.email}</td>
          </tr>
        );
      });

    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#housecomm-whos-who"
                  >
                    Who&#39;s Who
                  </a>
                </h2>
              </div>
              <div
                id="housecomm-whos-who"
                className="panel-body panel-collapse collapse out"
              >
                <div className="panel-body">
                  <table className="table table-condensed table-striped">
                    <thead>
                      <tr>
                        <th>Position</th>
                        <th>Person(s)</th>
                        <th>Kerberos Username(s)</th>
                      </tr>
                    </thead>
                    <tbody>{housecomm}</tbody>
                  </table>
                  <p>
                    Entry chair emails are ichairs@mit.edu, where i is the entry
                    letter you wish to contact. Appending @mit.edu to the end of
                    a kerberos username gives you the person's MIT email
                    address.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#housecomm-documents"
                  >
                    Documents
                  </a>
                </h2>
              </div>
              <div
                id="housecomm-documents"
                className="panel-collapse collapse out"
              >
                <div className="panel-body">
                  <p>
                    <a href="/housecomm-docs/constitution.pdf" target="_blank">
                      Constitution
                    </a>
                  </p>
                  <p>
                    <a href="/housecomm-docs/bylaws.pdf" target="_blank">
                      Bylaws
                    </a>
                  </p>
                  <p>
                    <a href="/housecomm-docs/security.pdf" target="_blank">
                      Security Policy
                    </a>
                  </p>
                  <p>
                    <a href="/housecomm-docs/storage.pdf" target="_blank">
                      Storage Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#housecomm-treasury"
                  >
                    Treasury
                  </a>
                </h2>
              </div>
              <div
                id="housecomm-treasury"
                className="panel-collapse collapse out"
              >
                <div className="panel-body">
                  <p>
                    See{" "}
                    <a
                      href="https://docs.google.com/document/d/1JLTnCKi-ISPrNEAJ3b82XhIAu2DqW9P1FJf41MOkqq0"
                      target="_blank"
                    >
                      this document
                    </a>{" "}
                    for details on reimbursement.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#housecomm-different-entry"
                  >
                    How to Move to a Different Entry
                  </a>
                </h2>
              </div>
              <div
                id="housecomm-different-entry"
                className="panel-collapse collapse out"
              >
                <div className="panel-body">
                  <h5>How to move to a different entry in MacGregor:</h5>
                  <ol>
                    <li>
                      Get written permission from the chair(s) of the entry you
                      would like to move into. The recommended method is to
                      email <a href="mailto:ichairs@mit.edu">
                        ichairs@mit.edu
                      </a>, where i is the entry letter, and cc{" "}
                      <a href="mailto:mac-rac@mit.edu">mac-rac@mit.edu</a>.
                    </li>
                    <li>
                      Ask the entry chairs for your new room assignment. If they
                      don’t have any openings, you may be placed on a waitlist.
                    </li>
                    <li>
                      Inform your current entry chairs that you will be leaving
                      the entry so they can assign your current room to someone
                      else.
                    </li>
                    <li>
                      Wait for an email from Bob Ramsay or the RAC saying that
                      your new room is ready for you to move in.
                    </li>
                  </ol>
                  This process applies year-round, although mid-semester
                  requests are likely to be deferred to the end of the semester.
                  Questions? Contact the Room Assignment Chair at{" "}
                  <a href="mailto:mac-rac@mit.edu">mac-rac@mit.edu</a>.
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#perishables-policy"
                  >
                    Perishable Delivery Policy
                  </a>
                </h2>
              </div>
              <div
                id="perishables-policy"
                className="panel-collapse collapse out"
              >
                <div className="panel-body">
                MacGregor has a perishable delivery policy as follows. It has been in effect since April 23, 2018 and will continue to be followed this year.
                <br/>
                <ol type="I">
                  <li>All perishable food deliveries (Instacart, Amazon Fresh, Blue Apron, etc.) must be picked up within 6 hours. After 6 hours, the food may be removed at the discretion of the desk worker and/or House Manager, and may be given away to other residents or discarded. If you are unable to pick up your delivery within this time frame, you must:</li>
                    <ol type="A">
                      <li>Email desk (macdesk@mit.edu) authorizing another person to pick up your delivery, or </li>
                      <li>Email desk to confirm that your order contains no perishable items and confirm when you will be available to pick up the delivery. If you arrange to pick up your delivery at another time and fail to do so, the food may be removed at the discretion of the desk worker and/or House Manager.</li>
                    </ol>
                  <li>In the case that no student desk worker is working at the time of delivery, no grocery deliveries will be allowed to be left at desk and you or someone else must pick up your order at the time of delivery.</li>
                </ol>
                </div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">
                  <a
                    className="accordion-toggle"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#ihr-description"
                  >
                    MacGregor In-House Rush(IHR) Procedures
                  </a>
                </h2>
              </div>
              <div
                id="ihr-description"
                className="panel-collapse collapse out"
              >
                <div className="panel-body">
                  All incoming freshmen tempted in MacGregor will be assigned a temporary room  for the week of orientation/REX. At this point, all freshmen tempted in
                  MacGregor will have the option to remain in MacGregor or <a href="https://studentlife.mit.edu/housing/first-year/first-year-residence-exchange-fyre">FYRE</a> out to another dorm.
                  After the dorms have been finalized, MacGregor will hold an event called In-House Rush to sort freshmen into the entry which best suits them. In-House Rush(IHR) is typically
                  held on the last Wednesday of August. Freshman are matched to each entry using a stable-marriage algorithm, which takes into account the preference of the freshman, as well as
                  the preferences of the current residents of the entry, in addition to several other variables. On the night of IHR, freshmen will be split into 10 groups, which will then spend 15
                  minutes in each entry(plus one break period) getting to know the residents and the culture of the entry. After each group has been to each entry, there will be a 30 minute free roam
                  period during which the freshmen can visit any entry they liked/wanted to know more about to help their decision. After that, each freshman will submit a ranking to the Rooming Assignment Chairs,
                  and each entry will also submit a ranking of the freshmen. These rankings are entirely confidential and will not be revealed at any point. The freshmen will then be assigned
                  an entry, and the entry will be responsible for assigning them a room within the entry that best suits their preferences. The following morning, freshmen will be required to move their belongings
                  to the dining hall so that all rooms can be cleaned(belongings will be watched at all points in time to ensure their safety). While this may seem like a great ordeal for many people,
                  MacGregor residents are willing to help move heavy belongings.
                  <br/>
                  For questions about IHR, please contact the <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#housecomm-whos-who">MacGregor Rooming Assignment Chairs</a>.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Housecomm;
