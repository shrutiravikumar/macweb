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
          </div>
        </div>
      </div>
    );
  }
}

export default Housecomm;
