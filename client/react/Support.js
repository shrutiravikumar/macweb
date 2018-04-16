import React, { Component } from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";
import Navbar from "./Navbar.js";

Meteor.subscribe("supports");
const Supports = new Mongo.Collection("supports");
Meteor.subscribe("medlinks");
const MedLinks = new Mongo.Collection("medlinks");
Meteor.subscribe("peermentors");
const PeerMentors = new Mongo.Collection("peermentors");
Meteor.subscribe("peerears")
const PeerEars = new Mongo.Collection("peerears");

class Support extends TrackerReact(Component) {
  render() {
    let sources = Supports.find({})
      .fetch()
      .map(support => {
        return (
          <tr key={support.name}>
            <td>{support.role}</td>
            <td>{support.name}</td>
            <td>{support.contact}</td>
          </tr>
        );
      });

    let medlinks = MedLinks.find({})
      .fetch()
      .map(medlink => {
        return (
          <tr key={medlink.name}>
            <td>{medlink.name}</td>
            <td>{medlink.email}</td>
            <td>{medlink.entry}</td>
            <td>{medlink.phone}</td>
          </tr>
        );
      });

      let peermentors = PeerMentors.find({})
      .fetch()
      .map(peermentor => {
        return (
          <tr key={peermentor.name}>
            <td>{peermentor.name}</td>
            <td>{peermentor.email}</td>
          </tr>
        );
      });

    let peerears = PeerEars.find({})
      .fetch()
      .map(peerEar => {
        return (
          <tr key={peerEar.name}>
            <td>{peerEar.name}</td>
            <td>{peerEar.entry}</td>
            <td>{peerEar.email}</td>
          </tr>
        );
      });

    return (
      <div>
        <Navbar />
        <div id="support" className="container">
          <p>
            Life can be tough sometimes. This page lists some resources at MIT
            that can help you.
          </p>

          <p>
            In addition to the contents below, more resources are listed in this{" "}
            <a href="/support-resources.pdf" target="blank_">
              resource list curated by UA Student Support and Wellness
            </a>.
          </p>

          <h3>Uncategorized Individuals</h3>

          <p>
            Here is a list of some people you can ask for help. If you aren't
            sure where to start, try your classmates and GRTs first.
          </p>
          <br />

          <table className="table table-condensed table-striped">
            <thead>
              <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Contact Info</th>
              </tr>
            </thead>
            <tbody>{sources}</tbody>
          </table>
          <br />

          <h3>Medlinks</h3>

          <p>
            MedLinks can answer questions about MIT Medical’s policies and
            services and can help you figure out when and how to connect with
            other MIT resources. They also provide single doses of common
            over-the-counter medications, first-aid materials, and safer-sex
            supplies.{" "}
            <a href="https://medlinks.mit.edu/where-we-are?field_residence_value%5B%5D=dorm_macg">
              Medlink Site
            </a>
          </p>
          <br />

          <table className="table table-condensed table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>{medlinks}</tbody>
          </table>

          <br />
          <h3>Peer Ears</h3>

          <p>
            Peer Ears are here to support mental health and answer any questions
            about MIT’s mental health resources. They are trained and
            confidential, and most importantly, they’re peers. Unfortunately,
            MacGregor does not currently have any Peer Ears. If you're interested
            in becoming a peer ear, please contact peerears-exec@mit.edu.
          </p>
          <br />

          <br />
          <h3>Peer Mentors</h3>

          <p>
          Peer mentors are undergraduate students who act as mentors to first
          year students. Peer mentors build a greater sense of community within
          MacGregor and help their mentees as they transition into life at MIT.
          </p>
          <br />

          <table className="table table-condensed table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{peermentors}</tbody>
          </table>

        </div>
      </div>
    );
  }
}

/*
          <table className="table table-condensed table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{peermentors}</tbody>
          </table>
*/

export default Support;
