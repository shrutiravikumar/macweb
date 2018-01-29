import React, { Component } from "react";
import Navbar from "./Navbar.js";

class About extends Component {
  render() {
    return (
      <div className="entryj">
        <Navbar />
        <div className="title-div">
          <h1>Welcome to J Entry!</h1>
          <h4>MacGregor House, MIT</h4>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-sm-1 col-xs-1" />
            <div className="col-md-8 col-sm-10 col-xs-10">
              <img
                id="main-photo"
                className="img-responsive"
                src="/entry/j/yearbook.jpg"
              />
            </div>
            <div className="col-md-2 col-sm-1 col-xs-1" />
          </div>

          <div className="row">
            <div className="col-md-2 col-sm-1 col-xs-1" />
            <div
              id="entry-description"
              className="col-md-8 col-sm-10 col-xs-10"
            >
              <p>
                J Entry is a friendly and welcoming place where you can always
                find people to hang out with. We often leave our doors open so
                that people can stop to talk as they pass by, and there are
                always people in our lounges p-setting, procrastinating, or just
                hanging out (or sometimes all of them at once!) in the evenings
                and until the wee hours of the morning. As one of the smallest
                entries in MacGregor, we are very close-knit, which provides us
                not only with a fun place to hang out with friends in our free
                time, but also a great support network anytime we’re having
                trouble with something. We try to create a friendly, caring,
                family-like atmosphere that makes J Entry a place where you can
                relax, be yourself, and feel at home. J Entry is a place where
                you can come to have a great time with fun people, but also one
                where you can find peace and quiet when you need it.
              </p>
              <p>
                We have weekly study breaks here in J, at which we celebrate the
                weekend by taking time out to have fun together! Study break
                traditions include our Thanksgiving potluck, teaching, a bowling
                trip, food nights, karaoke, a hiking trip, and our holiday gift
                exchange, just to name a few. Other things our residents enjoy
                together are movies, food, puzzles, board games, and staying up
                late hanging out in the lounge.
              </p>
              <br />
              <a href="/entry/j/residents">
                Meet some of our fantastic residents!
              </a>
              <br />
              <br />
            </div>
            <div className="col-md-2 col-sm-1 col-xs-1" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
