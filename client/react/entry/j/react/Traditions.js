import React, { Component } from "react";
import Navbar from "./Navbar.js";

class Traditions extends Component {
  render() {
    return (
      <div className="entryj">
        <Navbar />
        <div className="title-div row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <h1>Our J Entry Traditions</h1>
          </div>
          <div className="col-md-2" />
        </div>

        <div className="row">
          <div className="col-md-2" />
          <div id="entry-description" className="col-md-8">
            <p>
              In J we like to try all sorts of things. A lot of what we do is
              spontaneous, unique and unreproducible! However, we also have some
              traditions that we try to keep, and we'd like to share some of
              those with you here.
            </p>

            <h4>Lounge-Dwelling</h4>
            <p>
              In true MIT fashion, we (or at least some of us) like to
              procrastinate! So rather than focus on our work alone in our
              lovely singles we sometimes work in lounges just for the company
              and casual goofing around. Occasionally we find ourselves
              distracted...
            </p>

            <h4>Trolling and Pranks</h4>
            <p>
              Have you ever heard the troll song originally sung by Eduard Khil?
              Well, don’t worry if you haven’t, because you’ll hear plenty of it
              when you live here! We love playing pranks on each other, no
              matter how silly they might be. Be forewarned! Troll or be trolled
              in this entry!
            </p>

            <h4>Jamily Dinner</h4>
            <p>
              Members of J Entry gather every night to eat dinner together at a
              dining hall. Some are on meal plans, others just use tech cash.
              Round tables at Next can always accommodate n+1 people. Current
              record is 17 people!
            </p>

            <h4>Thanksgiving Potluck</h4>
            <p>
              Because Thanksgiving is all ‘bout that food!! Every year we each
              make some small dish or something for Thanksgiving and then get
              together to try and eat it all (we always fail). But hey,
              leftovers are good too, right?
            </p>

            <h4>Winter Gift Exchange</h4>
            <p>
              Right before Christmas time we have a gift exchange (white
              elephant/yankee swap type thing) within J. People buy some silly
              gifts and have a ball trying to take the best ones for ourselves
              (for some definitions of best).
            </p>

            <h4>Senior Dinner</h4>
            <p>
              Every year we like to dress up fancy and go out to some restaurant
              to enjoy a nice dinner with our entry’s seniors as a sort-of
              farewell. We usually try to wrap up the night by spending time
              talking about (usually funny and embarrassing) memories/moments
              with the seniors.
            </p>

            <h4>Spontaneous Food Trips</h4>
            <p>
              Sometimes people want to eat things late at night. Does it matter
              that IHOP is all the way over by Harvard? Of course not! These
              late night trips often go to IHOP, the South Street Diner, or Top
              of the Hub.
            </p>

            <h4>Bad Puns</h4>
            <p>
              They say laughter is great way to handle stress, and at in J, we
              spend a lot of time laughing. Jokes are a great way to do so, but
              as we are engineers and not liberal arts majors, our jokes can
              often come across as knee-slappers or super nerdy (don’t worry,
              once you start hanging out with people in your major, those puns
              will really take off). Sometimes, we have those awkward moments
              when almost everyone misses the joke. But ultimately, bad or good,
              awkward or not awkward, we love to make puns: they’re a great way
              to break out of the monotony that is Psets and classes.
            </p>

            <h4>Door Signs</h4>
            <p>
              At the beginning of each year, door signs are made for everyone
              that incorporates some aspect of their interests/personality.
            </p>

            <h4>JSWOLE</h4>
            <p>
              J Entry likes to be active when we can. Many people go rock
              climbing. Others run. In order to facilitate a more active J, we
              try to hold group workouts on Saturdays. All levels of experience
              are welcome!
            </p>

            <h4>Murder Mystery</h4>
            <p>
              Each REX and CPW, our esteemed thespians (AKA anyone who can be
              wrangled into acting) put on a Murder Mystery dinner for new
              prefrosh. Each year features a harried race to The Garment
              District for costumes, last-minute script and puzzle writing, and
              poorly-timed costume changes after our fake blood inevitably
              spills. When the freshmen arrive, a shot goes off, killing their
              host. They then spend the rest of their dinner solving puzzles
              (with heavy-handed help from us) to discover the killer and
              motive.
            </p>

            <h4>Civil War</h4>
            <p>
              One of our entry symbols is a small Christmas tree that has been
              in the entry for years. Every so often, the tree will be stolen by
              rebels and must be recovered by entry loyalists. Battle typically
              ensues, but a Tree-ty has been signed to secure the tree. Who
              knows how long the peace will last...
            </p>

            <h4>Finals Breakfasts</h4>
            <p>
              During finals week, our lovely GRTs provide us with breakfast so
              we have one less thing to worry about during this stressful time.
              It’s a great time to relax before exams, hang out, and wish each
              other the best of luck!
            </p>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

export default Traditions;
