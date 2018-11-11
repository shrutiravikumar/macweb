import React, { Component } from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";
import Navbar from "./Navbar.js";

class Facilities extends TrackerReact(Component) {
  render() {
    return (
      <div>
        <Navbar />

        <div className="row">
            <img className="img-responsive col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-6 col-sm-6 col-md-5 col-lg-5" src="/facilities/MacGregor.JPG"/>
        </div>
        <div className="row">
            <p className="col-xs-offset-3 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <br/>
                This page is dedicated to showcasing the various rooms and facilities of MacGregor.
                <br/>
            </p>
        </div>

        <div className="container">
            <div className="panel-group" id="accordian">

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#facilities-courtyard">
                                Courtyard
                            </a>
                        </h2>
                    </div>
                    <div id="facilities-courtyard" className="panel-collapse collapse out">
                        <div className="panel-body">
                            <div className="container">
                                <div className="row">
                                    <p className="col-md-offset-1 col-md-4">
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                        The courtyard is a great place to study, have lunch, hold events, or just relax and enjoy the outdoors. The lowrise entries of MacGregor wrap
                                        around the courtyard, shielding it from the sometimes noisy Memorial Dr. It has a basketball hoop residents can use, and basketballs can be
                                        checked out at the front desk. There are also tables and grills that are open for residents to make use of, and can be reserved for events through
                                        the <a href="/dininghall">Calendar page</a>.
                                    </p>
                                    <div className="col-md-offset-1 col-md-5">
                                        <img width="100%" src="/facilities/Courtyard_1.JPG" />
                                        <br/><br/>
                                        <img width="100%" src="/facilities/Courtyard_2.JPG" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#facilities-dhall">
                                Dining Hall
                            </a>
                        </h2>
                    </div>
                    <div id="facilities-dhall" className="panel-collapse collapse out">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-offset-1 col-md-5">
                                    <img width="100%" src="/facilities/Dining_Hall_1.JPG" />
                                    <br/><br/>
                                    <img width="100%" src="/facilities/Dining_Hall_2.JPG" />
                                </div>
                                <p className="col-md-offset-1 col-md-4">
                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                    While it doesn't serve food, MacGregor does have a dining hall. The dining hall is used for various events throughout the year, such as
                                    dorm-wide study breaks, Smash Bros tournaments, and the traditional MacGregor funded finals week dinners.
                                    <br/><br/>
                                    Inside the dining hall, there is also a stage, which frequently used as a dance studio for the open space and large mirror.
                                    <br/><br/>
                                    Both the dining hall and the dance studio can be reserved for events or practices via the <a href="/dininghall">Calendar page</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#facilities-bikes">
                                Bike Storage
                            </a>
                        </h2>
                    </div>
                    <div id="facilities-bikes" className="panel-collapse collapse out">
                        <div className="panel-body">
                            <div className="container">
                                <div className="row">
                                    <p className="col-md-offset-1 col-md-4">
                                        In 2017, a new outdoor bike storage area was built for use by MacGregor residents. This bike storage area is located base of J-Entry,
                                        directly accross from the main entrance to MacGregor, and is only accessable by MacGregor residents by tapping in with their student ID card.
                                        The new space allows plenty of room for all the bike-riders of MacGregor to store their bike, with ample security to prevent bikes from being stolen.
                                        Bike is the best way to get around Boston, so be sure to make use of this new addition to MacGregor.
                                    </p>
                                    <img className="col-md-offset-1 col-md-4" src="/facilities/Bikes_1.JPG" />
                                </div>
                                <div className="row">
                                    <img className="col-md-offset-1 col-md-4" src="/facilities/Bikes_2.JPG" />
                                    <img className="col-md-offset-1 col-md-4" src="/facilities/Bikes_3.JPG" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#facilities-rec-room">
                                Game Room
                            </a>
                        </h2>
                    </div>
                    <div id="facilities-rec-room" className="panel-collapse collapse out">
                        <div className="panel-body">
                            <div className="container">
                                <div className="row">
                                    <p className="col-md-offset-1 col-md-4">
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                        The game room is stocked with a pool table, ping pong table, 2 fooseball tables, an air hockey table, and a tv. Balls, paddles, and pool
                                        sticks are all stored behind the front desk and can be checked out by residents on request. The game room is also used occasionally for Housecomm
                                        meetings or study breaks because the couches are comfy.
                                    </p>
                                    <div className="col-md-offset-1 col-md-5">
                                        <img width="100%" src="/facilities/Game_Room_1.JPG" />
                                        <br/><br/>
                                        <img width="100%" src="/facilities/Game_Room_2.JPG" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#facilities-weight-room">
                                Weight Room
                            </a>
                        </h2>
                    </div>
                    <div id="facilities-weight-room" className="panel-collapse collapse out">
                        <div className="panel-body">
                            <div className="container">
                                <div className="row">
                                    <p className="col-md-offset-1 col-md-4">
                                        <br/><br/><br/>
                                        MacGregor is proud to have the best-stocked weight room out of any dorm at MIT. The weight room is stocked with a plethora a equipment,
                                        weights, barbells, benches, and machines, as well as a stereo system, scale, and cleaning equipment. Some of the machines are listed below:
                                    </p>
                                    <img className="col-md-offset-1 col-md-4" src="/facilities/Weight_Room_1.JPG" />
                                </div>
                                <div className="row">
                                    <img className="col-md-offset-1 col-md-4" src="/facilities/Weight_Room_2.JPG" />
                                    <p className="col-md-offset-1 col-md-4">
                                        <br/><br/><br/>
                                        <ul>
                                            <li>2 Treadmills</li>
                                            <li>1 Stationary Bike</li>
                                            <li>2 Eliptical Machines</li>
                                            <li>1 Erg(Rowing Machine)</li>
                                            <li>Squat Rack</li>
                                            <li>Bench Press Rack</li>
                                            <li>Punching Bag</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="row">
                                    <p className="col-md-offset-1 col-md-4">
                                        <br/><br/>
                                        <ul>
                                            <li>Leg Press Machine</li>
                                            <li>Leg Curl Machine</li>
                                            <li>Leg Extension Machine</li>
                                            <li>Cable Machine</li>
                                            <li>Pull Up/Chin Up/Dips Station</li>
                                            <li>Chest Press Machine</li>
                                            <li>And a bunch of other small pieces of equipment</li>
                                        </ul>
                                    </p>
                                    <img className="col-md-offset-1 col-md-4" src="/facilities/Weight_Room_3.JPG" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#facilities-music">
                                Music Room
                            </a>
                        </h2>
                    </div>
                    <div id="facilities-music" className="panel-collapse collapse out">
                        <div className="panel-body">
                            <div className="container">
                                <div className="row">
                                    <p className="col-md-offset-1 col-md-4">
                                        <br/><br/><br/>
                                        The music room is a room for music. The equipment is maintained and tuned by Housecomm's music chair.
                                         It's kept locked, but the music room key can be gotten at any time from the front desk.
                                    </p>
                                    <img className="col-md-offset-1 col-md-4" src="/facilities/Music_Room_1.JPG" />
                                </div>
                                <div className="row">
                                    <img className="col-md-offset-1 col-md-4" src="/facilities/Music_Room_2.JPG" />
                                    <p className="col-md-offset-1 col-md-4">
                                        <br/><br/><br/>
                                        Some of the musical equipment kept for resident use include:
                                        <ul>
                                            <li>A Piano</li>
                                            <li>Guitars</li>
                                            <li>Drum Set</li>
                                            <li>A Microphone</li>
                                            <li>Amplifiers</li>
                                            <li>A Stereo System</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#facilities-athena">
                                Athena Cluster
                            </a>
                        </h2>
                    </div>
                    <div id="facilities-athena" className="panel-collapse collapse out">
                        <div className="panel-body">
                            <div className="container">
                                <div className="row">
                                    <p className="col-md-offset-3 col-md-5">Every dorm at MIT has an Athena cluster with computers and printers to be used by MIT students.
                                    MacGregor's Athena cluster is accessable through the game room. In addition to the normal Athena CLuster equipment, MacGregor's athena cluster has
                                    a chalkboard and several handheld whiteboards for general use. Instructions on how to set up wireless Pharos printing from your personal device
                                    can be found <a href="http://kb.mit.edu/confluence/display/istcontrib/MIT+Pharos+Printing+Landing+Page">here</a>. </p>
                                </div>
                                <div className="row">
                                    <img className="col-md-5" src="/facilities/Athena_1.JPG" />
                                    <img className="col-md-offset-1 col-md-5" src="/facilities/Athena_2.JPG" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#facilities-laundry">
                                Laundry Rooms
                            </a>
                        </h2>
                    </div>
                    <div id="facilities-laundry" className="panel-collapse collapse out">
                        <div className="panel-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-offset-1 col-md-5">
                                        <img width="100%" src="/facilities/Laundry_1.JPG" />
                                        <br/><br/>
                                        <img width="100%" src="/facilities/Laundry_2.JPG" />
                                    </div>
                                    <p className="col-md-offset-1 col-md-4">
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                        MacGregor has 2 laundry rooms, both of which are located on the ground floor down the hall from the front desk. Across both rooms there are about
                                        20 washers and 20 dryers, with 7 free washers and 4 free dryers. Residents can check the status of their laundry
                                        <a href="https://laundryview.com/home/74/1364815">here</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#facilities-study_rooms">
                                Study Rooms
                            </a>
                        </h2>
                    </div>
                    <div id="facilities-study_rooms" className="panel-collapse collapse out">
                        <div className="panel-body">
                            <div className="container">
                                <div className="row">
                                    <p className="col-md-offset-1 col-md-4">
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                        For those looking for a quiet place to study, or a private space to work on group projects, MacGregor has study rooms on the main floor.
                                        There are two smaller, closed off rooms with large tables and whiteboards, as well as a large open space with individual study desks, couches,
                                        and more tables.
                                    </p>
                                    <div className="col-md-offset-1 col-md-5">
                                        <img width="100%" src="/facilities/Study_Rooms_2.JPG" />
                                        <br/><br/>
                                        <img width="100%" src="/facilities/Study_Rooms_3.JPG" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">
                            <a className="accordian-toggle" data-toggle="collapse" data-parent="#accordian" href="#facilities-storage">
                                Summer Storage
                            </a>
                        </h2>
                    </div>
                    <div id="facilities-storage" className="panel-collapse collapse out">
                        <p className="col-md-offset-1 col-md-10">
                        MacGregor has multiple options for storing suite and personal belongings over the summer. Most suites have 3 closets to be used between the 8 residents of that suite.
                        Additionally, there is basement storage that opens at the end of the spring semester, and remains locked until the start of the fall semester. Emails will be sent out to MacGregor
                        residents when the basement will be open for storing/retrieving belongings.
                        </p>
                    </div>
                </div>

            </div>
        </div>
      </div>
    );
  }
}

export default Facilities;
