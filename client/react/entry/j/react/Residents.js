import React, { Component } from "react";
import Navbar from "./Navbar.js";

class Residents extends Component {
  render() {
    return (
      <div className="entryj">
        <Navbar />
        <div className="title-div">
          <h1>Meet the Residents of J Entry</h1>
          <p>
            J is made of some pretty cool and diverse people. Here you can learn
            a little more about some of our current and past residents!
          </p>
        </div>


        <div className="container">
          <h1> Current Residents</h1>
          <ul className="row resident-list">
            <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
              <div className="resident">
                <h3>Ashley</h3>
                <div className="resident_photo">
                  <img
                    className="img-responsive"
                    src="/entry/j/resident_photos/ashleyHolton.JPG"
                  />
                </div>
                <div>
                  <div className="bio-info-div">
                    Major:{" "}
                    <span className="bio-info-span bio-info-major">6-9</span>
                  </div>
                  <div className="bio-info-div">
                    Class Year:{" "}
                    <span className="bio-info-span bio-info-year">2022</span>
                  </div>
                </div>
                <div className="resident_info">
                  <h4>Bio:</h4>
                  <p>
                  Heyo! I'm Ashley, a J1 resident who loves anime, memes, learning 
                  languages, weight lifting, and baking. I've grown up in the Midwest, 
                  but my family currently lives outside of Nashville. You can usually 
                  find me watching shows and movies in J1 or jamming out while making 
                  food or sweets in the J1 kitchen. I'm also the Garden Chair for 
                  MacGregor, even though I'm not very good at keeping plants alive, 
                  but I'm learning lol. My academic interests lie in robotics, AI/ML, 
                  and intelligence.
                  </p>
                  <h4>Why I Love J Entry:</h4>
                  <p>
                  J Entry is truly a home away from home. It is full of wonderful, 
                  interesting, funny people who are super chill and fun to be 
                  around. I also love all the different activities we do 
                  together, like study breaks, having dumb debates, watching movies, 
                  and more. 
                  </p>
                  <h4>Just for Fun:</h4>
                  <p>
                    <a href="https://youtube.com/shorts/S_pi_iVCxTM?feature=share">
                    https://youtube.com/shorts/S_pi_iVCxTM?feature=share
                    </a>
                  </p>
                </div>
              </div>
            </li>

            <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
              <div className="resident">
                <h3>Ben</h3>
                <div className="resident_photo">
                  <img
                    className="img-responsive"
                    src="/entry/j/resident_photos/benWeizer.jpg"
                  />
                </div>
                <div>
                  <div className="bio-info-div">
                    Major:{" "}
                    <span className="bio-info-span bio-info-major">2</span>
                  </div>
                  <div className="bio-info-div">
                    Class Year:{" "}
                    <span className="bio-info-span bio-info-year">2023</span>
                  </div>
                </div>
                <div className="resident_info">
                  <h4>Bio:</h4>
                  <p>
                  Hey, I’m Ben! I’m from a military family so I move around a lot but mostly 
                  I’m from Florida (primarily Orlando and Tampa). I’m the treasurer of J Entry. 
                  On campus, I’m mainly involved with Cru the Christian fellowship organization, 
                  which means I’m a Christian! So let me know if you ever want to talk about faith; 
                  I love having spiritual conversations! Anyway, I love doing things with friends 
                  like hiking or playing board games or video games. Really, I’m down to do 
                  anything as long as it’s with friends. I also love building things! Hence being 
                  a course 2. I’ve got a bunch of tools in my room so let me know if you need to 
                  borrow anything.
                  </p>
                  <h4>Why I Love J Entry:</h4>
                  <p>
                  Above all else, J Entry is a family. Since the first day I moved into J Entry, I 
                  felt welcomed as a part of the community. While I can talk about the fun activities 
                  we do together or the memories we’ve made, it’s really as simple as that.
                  </p>
                  <h4>Just for Fun:</h4>
                  <p>
                    <a href="https://youtu.be/oikj2mKZnrM">
                    https://youtu.be/oikj2mKZnrM
                    </a>
                  </p>
                  <p>
                    <a href="https://youtu.be/Lg73GKm7GgI">
                    https://youtu.be/Lg73GKm7GgI
                    </a>
                  </p>
                </div>
              </div>
            </li>

            <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
              <div className="resident">
                <h3>Bryan</h3>
                <div className="resident_photo">
                  <img
                    className="img-responsive"
                    src="/entry/j/resident_photos/bryanMedina.jpg"
                  />
                </div>
                <div>
                  <div className="bio-info-div">
                    Major:{" "}
                    <span className="bio-info-span bio-info-major">16</span>
                  </div>
                  <div className="bio-info-div">
                    Class Year:{" "}
                    <span className="bio-info-span bio-info-year">2022</span>
                  </div>
                </div>
                <div className="resident_info">
                  <h4>Bio:</h4>
                  <p>
                  Hey all, I'm Bryan (Medina) and am originally from New York City. 
                  I enjoy anything and everything space and spaceflight related, 
                  watching movies/anime, playing video games, and working out. I am 
                  on MIT's Spinning Arts Clubs where I spin fire around for fun, work 
                  at MIT's Space Propulsion Lab, and am an Army ROTC Cadet hoping to 
                  become an Aviation Officer piloting Blackhawks. This is all in 
                  pursuit of my goal of working in space exploration to extend humanity's 
                  reach into the cosmos, perhaps even as an astronaut myself. Ad Astra!
                  </p>
                  <h4>Why I Love J Entry:</h4>
                  <p>
                    When I first stepped into J entry I was greeted by a 
                    dozen people in matching J entry shirts. Ever since 
                    then, The feeling of community and unity I have had 
                    here has been unmatched. Being the smallest entry, 
                    everyone gets to know each other pretty well and truly 
                    shows their care for one another, something I 
                    definitely wanted from where I would live.
                  </p>
                  <h4>Just for Fun:</h4>
                  <p>
                    <a href="https://www.youtube.com/watch?v=RmCTDtn5yio">
                    https://www.youtube.com/watch?v=RmCTDtn5yio
                    </a>
                  </p>
                </div>
              </div>
            </li>

            <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
              <div className="resident">
                <h3>Jules</h3>
                <div className="resident_photo">
                  <img
                    className="img-responsive"
                    src="/entry/j/resident_photos/jules.png"
                  />
                </div>
                <div>
                  <div className="bio-info-div">
                    Major:{" "}
                    <span className="bio-info-span bio-info-major">16</span>
                  </div>
                  <div className="bio-info-div">
                    Class Year:{" "}
                    <span className="bio-info-span bio-info-year">2023</span>
                  </div>
                </div>
                <div className="resident_info">
                  <h4>Bio:</h4>
                  <p>
                  Hey! I'm Jules, a course 16 (the make stuff fly major) junior, and maker 
                  of silly things that sometimes work. When I'm not at jentry, I'm probably 
                  working in a makerspace or lab, or out exploring Boston. My other hobbies 
                  include digital art, playing games, and of course psetting.
                  </p>
                  <h4>Why I Love J Entry:</h4>
                  <p>
                  Jentry is a real cool hodge podge (I think that's how you spell it) of cool, 
                  interesting, and all around nice people. Plus, where  else on campus can you 
                  pset under the gaze of the queen of England?
                  </p>
                  <h4>Just for Fun:</h4>
                  <p>
                    <a href="https://youtu.be/dyIilW_eBjc">
                    https://youtu.be/dyIilW_eBjc
                    </a>
                  </p>
                </div>
              </div>
            </li>

            <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
              <div className="resident">
                <h3>Nicholas</h3>
                <div className="resident_photo">
                  <img
                    className="img-responsive"
                    src="/entry/j/resident_photos/nicholasMedearis.jpeg"
                  />
                </div>
                <div>
                  <div className="bio-info-div">
                    Major:{" "}
                    <span className="bio-info-span bio-info-major">6-3</span>
                  </div>
                  <div className="bio-info-div">
                    Class Year:{" "}
                    <span className="bio-info-span bio-info-year">2022</span>
                  </div>
                </div>
                <div className="resident_info">
                  <h4>Bio:</h4>
                  <p>
                    I’m Nicky, a current resident of J4 from Palo Alto, CA. 
                    I am a Harry Potter Nerd, Football Fan, and a member of 
                    MIT’s cross country and track and field teams. I can often 
                    be found watching Harry Potter fan videos, watching NFL 
                    Redzone on Sundays as my fantasy team gets wrecked, or 
                    running. I also am trying to start cooking more and take 
                    advantage of J1’s great new kitchen.
                  </p>
                  <h4>Why I Love J Entry:</h4>
                  <p>
                    The people of J entry are great to hang around with. 
                    They are always done to watch a movie, play Mario Kart, 
                    or just talk. I also love the J1 kitchen which has to be 
                    one of the greatest dorm kitchens on campus. :)
                  </p>
                  <h4>Just for Fun:</h4>
                  <p>
                    <a href="https://youtu.be/yRh-dzrI4Z4">
                    https://youtu.be/yRh-dzrI4Z4
                    </a>
                  </p>
                </div>
              </div>
            </li>

          <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
            <div className="resident">
              <h3>Robby</h3>
              <div className="resident_photo">
                <img
                  className="img-responsive"
                  src="/entry/j/resident_photos/robby.jpg"
                />
              </div>
              <div>
                <div className="bio-info-div">
                  Major:{" "}
                  <span className="bio-info-span bio-info-major">16</span>
                </div>
                <div className="bio-info-div">
                  Class Year:{" "}
                  <span className="bio-info-span bio-info-year">2023</span>
                </div>
              </div>
              <div className="resident_info">
                <h4>Bio:</h4>
                <p>
                Hi everyone, I'm Robby! I'm an astro-focused Course 16 with a 
                sprinkle of computer science and comparative media studies. When 
                I'm not PSetting, I'm probably playing video games like Minecraft 
                or Warframe, watching a show, or just hanging out with friends. 
                You can probably find me hanging out (or doing work) on J1 or J4! 
                </p>
                <h4>Why I Love J Entry:</h4>
                <p>
                I love the atmosphere we have in J. It has the right mix of lounging 
                as a group, getting to know people, and alone time. I've made my 
                closest friends in J and I truly feel like the Jamily is a home away 
                from home :)
                </p>
                <h4>Just for Fun:</h4>
                <p>
                  <a href="https://www.granttremblay.com/blog/trls">
                  https://www.granttremblay.com/blog/trls
                  </a>
                </p>
              </div>
            </div>
          </li>

          <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
            <div className="resident">
              <h3>Shruti</h3>
              <div className="resident_photo">
                <img
                  className="img-responsive"
                  src="/entry/j/resident_photos/shruti.jpg"
                />
              </div>
              <div>
                <div className="bio-info-div">
                  Major:{" "}
                  <span className="bio-info-span bio-info-major">6-9</span>
                </div>
                <div className="bio-info-div">
                  Class Year:{" "}
                  <span className="bio-info-span bio-info-year">2023</span>
                </div>
              </div>
              <div className="resident_info">
                <h4>Bio:</h4>
                <p>
                Hi! I'm Shruti, a J3 (and now J4) resident from the Bay Area, 
                California. I'm a Computation and Cognition major (course 6-9) 
                with a minor in Entrepreneurship & Innovation. I love hiking, 
                baking, listening to music, learning about how our brains work, 
                meeting new people, taking photos and traveling!!! Feel free to 
                ask me about student government, non-profit consulting, 
                entrepreneurship, WMBR (MIT's radio station) or just send me 
                song recommendations!! 
                </p>
                <h4>Why I Love J Entry:</h4>
                <p>
                J Entry is a collection of wonderful, spontaneous, chaotic and 
                kind individuals that will be there for you no matter what. My 
                best memories of J Entry include spontaneous adventures to New 
                Hampshire just to have a camp fire, late night conversations in 
                awful British accents, warm cookies on Sunday nights while we 
                talk about the best part of our weeks and so much more. 
                </p>
                <h4>Just for Fun:</h4>
                <p>
                  <a href="https://www.tiktok.com/@piratedadd/video/6897740377458019589?_d=secCgYIASAHKAESMgowElLRd9mlC6Z3gC3qif6clncgjfWSMrZv7wwFj13CSS4hO306JOj5akwPf8qsp%2FeJGgA%3D&checksum=211cd7e28de2e72baeec8634b39ba2a0216c06fcd431524ef7e1ace496dc8f86&clips_cover_ab=v3&enable_clips=1&language=en&preview_pb=0&sec_user_id=MS4wLjABAAAAE6X0tHmfn0r_XVaahlyVhdg__-P9E15Se9VzffdjCBaYK9OcbMWnptgWsNHornXr&share_app_id=1233&share_item_id=6897740377458019589&share_link_id=70F6DDDF-16D6-4D4E-B97A-0242ECE5CC40&source=h5_m&timestamp=1629150166&tt_from=sms&u_code=d6ak4i27g7meff&user_id=6694325701729108997&utm_campaign=client_share&utm_medium=ios&utm_source=sms&_r=1">
                  https://www.tiktok.com/@piratedadd/video...
                  </a>
                </p>
              </div>
            </div>
          </li>
        </ul>


        <h1> J Satellite (former residents - current students)</h1>
          <div className="container">
            <ul className="row resident-list">
              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                  <div className="resident">
                    <h3>Christopher</h3>
                    <div className="resident_photo">
                      <img
                        className="img-responsive"
                        src="/entry/j/resident_photos/christopherKiel.jpg"
                      />
                    </div>
                    <div>
                      <div className="bio-info-div">
                        Major:{" "}
                        <span className="bio-info-span bio-info-major">3</span>
                      </div>
                      <div className="bio-info-div">
                        Class Year:{" "}
                        <span className="bio-info-span bio-info-year">2022</span>
                      </div>
                    </div>
                    <div className="resident_info">
                      <h4>Bio:</h4>
                      <p>
                        I am the entry's resident ginger and crock-wearing enthusiast.  
                        You are most likely to find me in the dorm listening to 
                        classic rock music while wearing fuzzy pajamas pants and 
                        nerdy t-shirts.  Outside of J I love chemistry and building 
                        things such as solar powered vehicles.  I am also a member 
                        of the fencing team and love biking around campus.
                      </p>
                      <h4>Why I Love J Entry:</h4>
                      <p>
                        I love the Jamily and each of its amazing and quirky jenizens.  
                        They made my transition to college much easier and gave 
                        me a home away from home.  J entry is my place for dinners, 
                        Saturday study breaks, crazy shenanigans, and everything else. 
                      </p>
                      <h4>Just for Fun:</h4>
                      <p>
                        <a href="https://youtu.be/U9t-slLl30E">
                        https://youtu.be/U9t-slLl30E
                        </a>
                      </p>
                    </div>
                  </div>
                </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                  <div className="resident">
                    <h3>Maya</h3>
                    <div className="resident_photo">
                      <img
                        className="img-responsive"
                        src="/entry/j/resident_photos/mayaReese.JPG"
                      />
                    </div>
                    <div>
                      <div className="bio-info-div">
                        Major:{" "}
                        <span className="bio-info-span bio-info-major">8</span>
                      </div>
                      <div className="bio-info-div">
                        Class Year:{" "}
                        <span className="bio-info-span bio-info-year">2022</span>
                      </div>
                    </div>
                    <div className="resident_info">
                      <h4>Bio:</h4>
                      <p>
                        Hey stranger! I come from California, the land of surfing and 
                        In-n-Out (I partake in neither of those things). At MIT, 
                        I study physics because I really love math (and I guess dark 
                        matter and quantum mechanics are pretty cool too). While in 
                        California my hobbies included kayaking and hiking, you might 
                        have heard that Boston is kind of cold, so outside of class, 
                        I busy myself with Israeli dancing, baking challah with the 
                        MIT club Challah for Hunger, drinking good coffee (come meet 
                        my beloved Nespresso machine), and reading. I tend to read a 
                        lot of fantasy and sci-fi, with a specific passion for A Song 
                        of Ice and Fire.
                      </p>
                      <h4>Why I Love J Entry:</h4>
                      <p>
                        I love J Entry because until I got to college I thought 
                        that people suck, but J entry has proven to me otherwise. 
                        We’re a super tight-knit jamily. Everyone is so nice, funny,
                        interesting, and smart in different ways, and I feel like 
                        we all really care about each other and have a genuine 
                        interest in getting to know one another. We have really 
                        fun weekly study breaks that range from going on hikes 
                        to watching memes to having a Great J-entry Bake-off. 
                        Don’t even get me started on the shenanigans.
                      </p>
                      <h4>Just for Fun:</h4>
                      <p>
                        <a href="https://www.youtube.com/watch?v=0M_hhVg9XUE">
                        Video may contain traces of Game of Thrones spoilers:
                        https://www.youtube.com/watch?v=0M_hhVg9XUE
                        </a>
                      </p>
                    </div>
                  </div>
                </li>

                <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                  <div className="resident">
                    <h3>Neosha</h3>
                    <div className="resident_photo">
                      <img
                        className="img-responsive"
                        src="/entry/j/resident_photos/neoshaNarayanan.jpg"
                      />
                    </div>
                    <div>
                      <div className="bio-info-div">
                        Major:{" "}
                        <span className="bio-info-span bio-info-major">1 or 3</span>
                      </div>
                      <div className="bio-info-div">
                        Class Year:{" "}
                        <span className="bio-info-span bio-info-year">2022</span>
                      </div>
                    </div>
                    <div className="resident_info">
                      <h4>Bio:</h4>
                      <p>
                        Hello! I'm Neosha, one of the freshmen of J. I currently 
                        call J3 my home, but I am from Amherst, a small and wonderful 
                        town in western Massachusetts. I love all things crafty 
                        (especially knitting and crocheting), giving gifts, making 
                        people smile, traveling, Lord of the Rings, Wes Anderson 
                        films, and making/eating food. I play the violin in MITSO 
                        (MIT symphony orchestra) and the MIT Chamber Music Society, 
                        although I mostly listen to 60s classic rock and 80s pop. 
                        I love to run, and I ride road with MIT's club cycling team. 
                        I am an avid photographer and once had my pictures displayed 
                        in Joe Biden's house. I am also a co-social chair for the 
                        entry.
                      </p>
                      <p>
                        Ask me about: Greenland (language, culture, natural history, 
                        the ice sheet, what it’s like to live there, etc.), Lord of 
                        the Rings/The Silmarillion/Tolkien, Ice cores, Ozone depletion,
                        Spider silk and 3D webs, the asdf movies, my dog
                      </p>
                      <h4>Why I Love J Entry:</h4>
                      <p>
                      Because we put the “cult” in “culture!" Jokes aside, I 
                      love J entry because I feel truly at home here. The 
                      atmosphere is so welcoming and kind. The people here 
                      are diverse in their interests, personalities, and life 
                      stories, and I love hearing about the amazing things 
                      everyone is doing. We have great traditions, my favorites 
                      being Jacapella, Janksgiving, and Jamily dinners.
                      </p>
                      <h4>Just for Fun:</h4>
                      <p>
                        <a href="https://youtu.be/BJj8X07Zm-0">
                        https://youtu.be/BJj8X07Zm-0
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          <h1> J Lums (former residents - graduates)</h1>
          <div className="container">
            <ul className="row resident-list">
              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Alison</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/alisonLouthain.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">16</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2021</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hey y'all! I'm Alison and like many other Ohioans, I'm super
                      excited about space and flight. Most of my life is currently
                      consumed by psets and Navy ROTC, but in what little spare
                      time I have I like to run, bake, make origami, read, listen
                      to podcasts, and take/send out BuzzFeed quizzes (after all,
                      it is incredibly important to know which potato side dish
                      you are). If I'm not doing any of these things I am probably
                      hanging out in the J1 lounge or trying to maintain a
                      somewhat normal sleep schedule (a rarity around here).
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      It sounds super cheesy and everybody says it, but J entry
                      really is a family. When I make it back at the end of a long
                      day, it feels like I'm going home. I like leaving my door
                      open because I know that there's always something
                      interesting happening, whether it's singing songs from
                      children's TV shows, discussing the current political
                      climate, or calculating exactly how many tortillas we need
                      to make in order to feed 14 people. What's not to love about
                      living with some of your best friends?
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://youtu.be/U9t-slLl30E">
                        https://youtu.be/U9t-slLl30E
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Julia</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/julia.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-1</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2021 & 2022 MEng</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                    Hello hello, I love making people laugh and I also love listening 
                    to people talk about what they care about. I stress bake and clean 
                    and I mostly eat plants unless there’s dessert. (Did someone mention 
                    chocolate? Oh wait, that was me). I also enjoy theater, singing 
                    terribly, listening to random music, JSWOLE, adventures, traveling, 
                    wholesome memes, sarcasm, being awkward, and procrastination. 
                    Shoutout to my hometown of Dayton, Ohio, home of the best donuts in 
                    the nation, the best museum in the nation, and a bunch of cornfields. 
                    At MIT, I’m an Air Force ROTC cadet, WMBR's general manager and an 
                    exec member of MIT Prison Education Initiative (PEI) among other things.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      I'll set the scene for you: A noob freshman falls in love
                      with an entry the week of IHR while watching memes and
                      murder mysteries. Alas, at this time it was not meant to be;
                      but the entry, in its eternal kindness, welcomed her anyway
                      and now they can’t get rid of her. This is her home now.
                      Inquire for the melodramatic version if you have time to
                      waste.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      True Wisdom:{" "}
                      <a href="https://youtu.be/D-UmfqFjpl0">
                        https://youtu.be/D-UmfqFjpl0
                      </a>
                    </p>
                    <p>
                      and Quality Content™:{" "}
                      <a href="https://youtu.be/furTlhb-990">
                        https://youtu.be/furTlhb-990
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Philip</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/philipTegmark.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">
                        2
                      </span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2021</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hi, I'm Philip! I'm from the area—a bit under half an 
                      hour's drive from MIT when traffic is good. Outside of 
                      dying from PSets (help), I like to spend my time hanging 
                      out with other members of the entry during dinner and study 
                      breaks, and practicing martial arts with the American 
                      Jiu-Jitsu Club.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                    I like the people here, and for me J Entry is the right mix 
                    of quiet and fun. There's also a strong sense of community, 
                    and if you have an idea for something fun to do (as well as 
                    the time to do it), you can often find others in the entry 
                    who'd be willing to do it with you.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>I like comics.</p>
                    <p>
                      <a href="https://garfield.com/comic/2015/10/09">
                      https://garfield.com/comic/2015/10/09
                      </a>
                    </p>
                    <p>
                      <a href="http://thepigeongazette.tumblr.com/post/133280440684/i-live-a-thrilling-life-in-other-news-my">
                      http://thepigeongazette.tumblr.com/post/133280440684/i-live-a-thrilling-life-in-other-news-my
                      </a>
                    </p>
                    <p>
                      <a href="https://smbc-comics.com/index.php?id=1652">
                      https://smbc-comics.com/index.php?id=1652
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Ben</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/ben.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-3</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2020</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Ahoy! I'm Ben, a friendly class of 2020 course 6-3! I love
                      to play the saxophone, enjoy a video game or two, and bring
                      the glorious gift of memes to the masses. I'm from Kentucky,
                      though I'm not too much of a southerner (except that I
                      worship sweet tea, for it is the true nectar of the gods).
                      As far as my interests go, I'm a fan of Marvel movies, Harry
                      Potter, Game of Thrones, Stranger Things, and World of
                      Warcraft. While I may be a 6-3, I'm also a huge fan of
                      creative writing! I love to write short stories and
                      hopefully one day will have a good enough idea to write a
                      novel or something.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      We are one big happy Jamily! We're all so different but we
                      still manage to get along and enjoy each other's different
                      interests. I love that we have study breaks quite often so
                      that I have motivation to leave my room, and I love that
                      with our combined sleep schedules there is almost always
                      someone awake in J entry.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://youtu.be/d6K3T63w8AA">
                        https://youtu.be/d6K3T63w8AA
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Charlotte</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/charlotteMinsky.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">12 and 21E</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2020</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hi! I'm a junior, Massachusetts native, and proud J3 resident. 
                      I'm a rare EAPS major and I really like planets, especially 
                      if they're not in our solar system (although this one's 
                      pretty cool too I guess). I'm an even rarer history major 
                      and I'm always down to talk about history things or how to 
                      do lots of humanities at MIT. I'm the president of Queer West 
                      and the MIT Prison Education Initiative, so hit me up if 
                      you're interested in either of those. I can be easily bribed 
                      with pho and podcast recommendations, so use your power wisely.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      J Entry is not #squadgoals; it's not an orientation packet 
                      stock photo. It's a true, authentic family. It's a diverse 
                      group of people with wildly different interests and 
                      personalities, and I love that I constantly learn from other 
                      people's perspectives and don't have to be one particular type 
                      of person to fit in. We support each other through thick and 
                      thin, and I always feel comfortable in J; it truly is home. 
                      There are also always people willing to come on adventures, 
                      whether it's a spontaneous 1 AM trip to IHop, renting a car 
                      and driving to Maine, or just going with you to a campus 
                      lecture on something you're interested in. You can also have 
                      a chill night in playing games and watching movies (or mostly 
                      memes, tbh), staying up until sunrise having philosophical 
                      discussions, or staying in your room because everyone 
                      respects when you need downtime. Come for the rich culture 
                      of memes, mascots, traditions, pranks, and adventures, and 
                      stay for the friends and memories that will last you a 
                      lifetime.
                    </p>

                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://vine.co/v/OV0H1XVBntP">
                        https://vine.co/v/OV0H1XVBntP
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Megan</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/megan.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">2</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2020</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hi! I am an avid runner, reader, and hiker who lives on J3.
                      Most of my time is spent on psets and MIT track and cross
                      country. After trying to decide whether to major in course 2
                      or 22, I got a UROP in course 22 working on nuclear reactor
                      safety and am majoring in course 2. I'm also one of the rare
                      Californians who prefers Boston weather (having seasons is
                      nice).
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      I love J entry because of people always hanging out in
                      lounges, random discussions (well, maybe arguments) about
                      the most random, unfeasable ideas, friendly people, high
                      quality (and quite a bit of low quality) memes. Also, the
                      study breaks every week are super nice and our annual
                      Thanksgiving dinner is fantastic.
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Satvat</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/satvat.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-3</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2020</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hello everyone. I am from India and I have transferred 
                      to MIT after completing 2 years of study at IIT Bombay. 
                      This is my first time in the US and I am still adapting 
                      to the culture here. I am mainly interested in studying. 
                      I also like reading books, solving puzzles and listening 
                      to devotional music. I also like to talk about the meaning 
                      of life and the state of the world. I am also interested 
                      in the sciences, like math, astronomy, physics, philosophy 
                      and other things. Please feel free to discuss any of these 
                      topics with me. I prefer one-to-one conversations to group 
                      discussions, so if you want to know my mind, it would be 
                      nice to chat one-to-one.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      I wanted to come here so that I may have both privacy and
                      social relations. I have got that here because I have a
                      single room and I meet the residents often in the jamily
                      lunch/dinner, while roaming around the entry, and many other
                      occasions. In particular, I like how the residents are very
                      friendly and welcoming, and how they express their ideas on
                      the door of their room. They also let me play lecture/music
                      at about 6 am in the bathroom.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      If you ever want to feel confused:{" "}
                      <a href="https://www.youtube.com/watch?v=o_T4VrfuFbI">
                      https://www.youtube.com/watch?v=o_T4VrfuFbI
                      </a>
                      <a href="https://www.youtube.com/watch?v=kyV_Af95zXU">
                      https://www.youtube.com/watch?v=kyV_Af95zXU
                      </a>
                    </p>
                    <p>
                      Some technical  comics (feel free to ask me about source):{" "}
                      <a href="https://www.dropbox.com/s/2htd9lpf8g5zx1b/paramahamster_13_-_vegan_comic.jpg?dl=0">
                      https://www.dropbox.com/s/2htd9lpf8g5zx1b/paramahamster_13_-_vegan_comic.jpg?dl=0
                      </a>
                      <a href="https://www.dropbox.com/s/qsxsuv722lv5ck3/param_comic2.jpg?dl=0">
                      https://www.dropbox.com/s/qsxsuv722lv5ck3/param_comic2.jpg?dl=0
                      </a>
                      <a href="https://www.dropbox.com/s/8sxbb3dxvqbw1wk/param_comic1.jpg?dl=0">
                      https://www.dropbox.com/s/8sxbb3dxvqbw1wk/param_comic1.jpg?dl=0
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Simon</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/simon.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">18</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2020</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hey! I’m a dude from Columbus, Ohio who now calls J4 home.
                      I study math, run track, play piano, and listen to edgy music. 
                      If you ever want to learn how to unicycle, make a truly amazing 
                      sandwich, create some music, or bike like a maniac around 
                      Boston, hit me up.
                    <h4>Why I Love J Entry:</h4>
                      <p>
                      J is the smallest entry in MacGregor, so the culture is 
                      very cozy. I really love the people who live here and the 
                      collective culture that has developed over the years which 
                      makes it easy to feel at home. And a lot of fun shenanigans 
                      happen here.
                      </p>
                      <h4>Just for Fun:</h4>
                    </p>
                    <p>
                      <a href="https://youtu.be/fwNGR792Ifk">
                      https://youtu.be/fwNGR792Ifk
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Tony</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/tony.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">18</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2020</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Welcome to my humble column. I enjoy following e-celebs and
                      rewatching/relistening/replaying a small but high-quality
                      collection media obtained through the internet.
                    </p>
                    <h4>Why I Love J Entry</h4>
                    <p>
                      Gaming/Movies are always more fun with a crowd and J has
                      plenty of fans of both.
                    </p>
                    <h4>My favorite documentary:</h4>
                    <p>
                      <a href="https://youtu.be/fZmRw9o63RM">
                        https://youtu.be/fZmRw9o63RM
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Tyler</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/tyler.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-3</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2020</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hi, I'm Tyler! I love programming, technology, video games
                      (and designing them), as well as so many other things that I
                      wish I had time to explore. I enjoy thoughtful conversations
                      about anything from multiple universes to the inner workings
                      of society. In general, I just enjoy learning about
                      anything.
                    </p>
                    <p>
                      I am an absolute fanatic about The Walking Dead (TWD) and
                      all things zombies. You can typically find me wearing TWD
                      shirts or playing zombie games. I also enjoy making puns, no
                      matter how bad they are.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      The people in J are amazing. During in-house rush, they
                      immediately stood out as the people I would want to live
                      with. There is such a diverse group of people and I feel
                      like I can be myself around all of them.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://youtu.be/jjtkMCLRf-M">
                        https://youtu.be/jjtkMCLRf-M
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Katelyn</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/katelynBurkhart.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">HST/Bioastronautics (PhD)</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">PhD: 2019</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      I'm a GRT for J Entry, a human space exploration enthusiast, 
                      a reader of novels (mostly sci-fi/fantasy), and a researcher 
                      in the Orthopedics lab at BIDMC. I study the loss and 
                      recovery of astronaut muscle and bone after 6-months of 
                      spaceflight on the ISS, and I would love to have the 
                      opportunity to go to space myself! I'm also married to Eric, 
                      and we love to go exploring! Our numerous adventures together 
                      have taken us to the Grand Tetons for a solar eclipse, Spain 
                      for a summer vacation, and New Zealand for our honeymoon!  
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      I love J entry's enthusiasm for living life and fully 
                      investing themselves in every activity they take part 
                      in! People are thoughtful, full of sass, and always 
                      supportive. I also love hanging out and puzzling, 
                      playing board games, watching movies, or creating fun 
                      crafts with J. 
                    </p>

                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://www.youtube.com/watch?v=TvGYIALoKRk">
                      https://www.youtube.com/watch?v=TvGYIALoKRk
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Eric</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/ericBernstein.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">Electrical Engineering Signal Processing, Biomedical Engineering, General Management</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">BS: 2005, MS: 2008, PhD: 2013, MBA: 2015</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      I'm one of the GRT's of J entry. I actually work for Bose 
                      Research and Development working on new secret active noise 
                      control technologies for vehicles. I'm the resident Dr. of 
                      J Entry until my wife Katelyn graduates. I am a huge Star 
                      Trek fan and appreciate pretty much any other sci fi series 
                      as well. I play plenty video games (Xbox/ PC mostly) and will
                      always get the latest tech toys, even if they don't fit
                        in our apartment. Katelyn and I are also big board game 
                        players and love trying out whatever the latest games are 
                        to bring a group of friends together (Telestrations!).  
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      J entry is a great place to unwind after a long day. 
                      All of the students have so many diverse interests that 
                      it is fascinating just to hear the stories about the latest 
                      class project or extra-curricular activity. Everyone is 
                      working their best and shares that energy with each other 
                      in a way that makes me better than I was before coming to J 
                      entry. Our Sunday community dinners where everyone shares the 
                      best parts of their weeks is one of my favorite J entry 
                      traditions.
                    </p>

                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://youtu.be/SIzkgLdzd9g">
                      https://youtu.be/SIzkgLdzd9g
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Caity</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/caity.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">
                        8 & 6-1
                      </span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2019</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      I'm Caity, a freshman most likely majoring in Course 8 or
                      something related to physics. I am from a suburban town
                      outside of Philadelphia, PA and insist that there is
                      nothing better than a good cheese steak. I apparently have
                      an accent, so don't worry if you hear me saying words like
                      "bad" and "water" in a funny way. I am also a fan of water
                      ice and hoagies aka Italian ice and subs for all of you
                      non-Philly folk. I love the movie frozen and will often be
                      found wandering around wearing Olaf pajamas.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      J Entry is more than just a home away from home. When you
                      have a bad day and feel like crying, there's always
                      someone here talk to and a shoulder to cry on. When you're
                      really hyper and happy, everyone else is also really happy
                      and hyper with you. Being a close-knit family, we also
                      tend to spend a lot of time PSetting with each other in
                      the lounge. J is a collection of fun, interesting, unique,
                      and inspiring individuals. I love every minute I spend
                      with the people in J, and I'm so happy that I was
                      fortunate enough to be in this entry. After walking back
                      from campus at the end of a long day, my favorite thing to
                      do is to look into the J main lounge and see everyone
                      hanging out and cracking up. It truly is the highlight of
                      every day.
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Catherine</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/catherine.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">20</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2019</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                    Hiya! As the ultimate MIT procrastinator, I am filling this 
                    out one month after graduation. Now an alum, I was a premed 
                    course 20 and one of the leaders of the J4 rebellion (J4 
                    best floor). I'm originally from Mass and so I never moved 
                    far for college! My hobbies include being Mama J (then grandma 
                    J, then great-grandma J), some extremely beginner rockclimbing, 
                    puzzles, skiing, and dwelling in the J1 lounge. At MIT, I used 
                    to teach AP Bio through ATI and did absolutely all the premed 
                    activities. Even though I graduated, you'll see me around 😉
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                    J entry and I have a complicated relationship. J entry is my 
                    ultimate home. It's my family. The people I love to the bone, 
                    the people I get frustrated with, the people I can count on 
                    showing up in a pack of 12 for afternoon ice cream, the people 
                    who I take very seriously, the people I can never make restaurant 
                    reservations for because they're too many going, and overall the 
                    people I can never seem to get enough of. You're going to have 
                    ups and downs with everyone in college. That's life. But J entry 
                    is the place for you if you're looking for somewhere to be there, 
                    even after you've had your downs. They're your late night 
                    conversations. They're serial lunch date enthusiasts. They're 
                    just people who care a whole lot about a whole lot of things. 
                    You want someone to do something with you? You'll find someone. 
                    It might take a few pokes, a few dragged feet, but that's what 
                    family is.. in the end, someone is there to go to the random movie, 
                    or to walk a random hike 2 hours away. As a Great-Grandmama J who 
                    takes her job very seriously, I'm proud to call J entry my family.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="The best cinnamon rolls ever!">
                      https://www.ambitiouskitchen.com/best-cinnamon-rolls/
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Hutch</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/hutchHutchinson.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-3</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2019</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hello! If you hear someone on J3 shouting at a computer some 
                      Sunday afternoon, I am probably watching football. Other
                      than being a Green Bay Packers fan, I enjoy listening to podcasts,
                      painting using MS Paint, designing flags, and trying to be 
                      more spontaneous. Around MIT, you may see me in camo because 
                      I'm a cadet in Air Force ROTC Detachment 365. AIRPOWER!  
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      Living in J Entry is more than I could have hoped for in a
                      college experience. It is such an amazing "jamily" here and
                      these people truly are my best friends. Daily, they help 
                      remind me that there is so much more to life than just work.
                      Some of my favorite J Entry traditions are Jamily Dinner and
                      weekly study breaks. I like this place so much that I made a
                      flag for it!
                    </p>

                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://www.instagram.com/beachmaze/">
                      instagram.com/beachmaze/
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Jasmin</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/jasmin.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-2?</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2019</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Yo, I'm Jasmin on J-1. I am on the MIT cheer team, and
                      when I don't have practice, I enjoy going out with friends
                      or playing on Xbox. I love Disney, Spiderman, so many TV
                      shows (more than I should watch), SNAPCHAT, and naps.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      I love the family-feeling in J entry and the fact that the
                      main lounge practically always has someone there to talk
                      to. The people are so approachable and nice!
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://youtu.be/diU70KshcjA">
                        This song never gets old
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Jorge</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/jorge.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">20</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2019</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hey guys, I'm Jorge, one of J's resident MedLinks (you'll
                      learn more about us later, but we're good people that try
                      to keep you healthy).{" "}
                    </p>
                    <p>
                      I am originally from Peru but I have been living in Miami,
                      Florida for way too long now and the winters here have
                      been quite a great change of pace from the constant
                      asphyxiation that comes with breathing in water as you
                      walk in Miami's humid climate. Things that I like:
                      <ol>
                        <p>1. FC Barcelona</p>
                        <p>
                          2. Music (typically rap: Mac Miller, Chance the
                          Rapper, Lil Dicky, Childish Gambino)
                        </p>
                        <p>3. Making fun of Madelyn</p>
                        <p>4. TV shows (The Simpsons, Rick and Morty, etc.)</p>
                      </ol>
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      The people here are pretty great, I constantly make fun of
                      them and they still tolerate me, it's quite impressive. I
                      also really appreciate the fact that I can always find
                      someone that is willing to help me when I need it, be it
                      with PSETs or baking cookies at 3am. J Entry is pretty
                      cool I guess.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://www.youtube.com/watch?v=094h1VzsvpE">
                        https://www.youtube.com/watch?v=094h1VzsvpE
                      </a>
                    </p>
                    <p>
                      <a href="https://i.imgur.com/28RZDbr.gif">
                        https://i.imgur.com/28RZDbr.gif
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Katie</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/katie.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">9</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2019</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hi I'm Katie! I love brains (and the minds they create) and
                      exclamation points and I do too many things! I spend a large
                      part of my day on various UROPs (Ask me about my research!
                      Also give me a time limit!), hanging around J entry, and
                      turning psets in at 11:58 PM because that's not technically
                      the last minute. I am best known to the freshmen of
                      MacGregor as "oh yeah, you're that girl from Murder Mystery,
                      you look different when you're not stressed and wearing 6
                      inch stilettos" because I write the script and puzzles for
                      J's bi-annual Murder Mystery dinner. If you want to know
                      more about me and what I do (because, obvi, who wouldn't?)
                      or if you just need a place to chill and complain about The
                      Institvte TM, feel free swing by my room on the fourth
                      floor!
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      You know how in dumb sitcoms everyone somehow all lives in
                      the same apartment or at least spends all their time there
                      and they're just hanging out having fun all the time even
                      though there's definitely not enough space for all of them?
                      That's what it's like living in J entry. I get to come home
                      and see my best friends everyday, then we stay up too late
                      pretending to work on essays while watching memes together,
                      go rock climbing, play board games, get IHOP at 4 AM, prank
                      each other's doors, or do whatever :)
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://youtu.be/QHNeMcSdBCM">
                        https://youtu.be/QHNeMcSdBCM
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Kip</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/kip.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">2</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2019</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hello. My name is Kip and I am a Course 2 from Southeast
                      Idaho. Between classes, I perform with Roadkill Buffett,
                      MIT's premier improv comedy troupe, and play way more IM
                      hockey than is academically advisable. I love robots,
                      especially the FIRST Robotics Competition (which I competed
                      in all four years of high school), and still continue to
                      mentor FRC Teams. I also enjoy NASCAR and driving to
                      racetracks to watch other live motorsports events with my
                      brother, as well as playing video games with my fellow J
                      residents.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      J is a fun and inviting place filled with a delightfully
                      strange assortment of interesting people. Although there is
                      not necessarily one central interest that we all share, I
                      have enjoyed learning about other people’s interests, as
                      well as contributing my own to the overarching culture of J.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://youtu.be/SQoA_wjmE9w">
                        https://youtu.be/SQoA_wjmE9w
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Madelyn</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/madelyn.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2019</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hi. I'm very indecisive about my major, but I like
                      Chemistry and batteries, although I don't know enough
                      about either to really say I like them. I think I want to
                      be an engineer, but I haven't built anything ever, so
                      yeah...
                    </p>
                    <p>
                      So that I don't have to think about my lack of concrete
                      goals and aspirations, I keep myself very busy. Besides
                      going to school, I also dive on the Varsity Diving Team,
                      volunteer as a tutor for local school kids, and work as an
                      alumni caller (Tech Caller) to fundraise for MIT. Even
                      though I'm not around the entry that much, I think I
                      contribute to its welcoming environment through the signs
                      on my door that greet anyone entering J3. Some features
                      are Black Science Man, portal unicorn, and Meet the
                      Robinsons.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      J is my home away from home. We really are a family here.
                      If you have a bad day, someone is always willing to talk
                      with you or brood with you, whichever fits your mood. If
                      you have a good day, you bet someone will dance around in
                      glee with you. Staying up past three doing psets is not
                      advised, but when you have your fellow jenizens to keep
                      you company, it's not that bad.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://imgur.com/gallery/h385k10">
                        https://imgur.com/gallery/h385k10
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Nina</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/nina.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">
                        6-2, minor in Design
                      </span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2019</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      I have a loud laugh and a lot of feelings, but I won a 3D
                      printer at a poker tournament, so I can be cool sometimes.
                      I love Media Lab and Buzzfeed. MIT pays me to walk
                      backwards and play with Legos. I love design and thinking
                      about how to merge software, hardware, math, and media
                      into meaningful interactions that help people solve
                      problems or explore their world in a new way.{" "}
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      Home is where you come back to on your best and worst
                      days. J Entry is home. I love the people here. We're very
                      tight knit and truly care about each other. You can always
                      find someone in a lounge or with their door open. Whether
                      you need help on a pset (or procrastinating), a Jenizen
                      will be there. It's common to see us studying, eating
                      dinner, or out in Boston together.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://www.youtube.com/watch?v=eb1vcaqAivY">
                        https://www.youtube.com/watch?v=eb1vcaqAivY
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Ryan</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/ryan.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">
                        2, minor in BME
                      </span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2019</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hey all! I'm a junior from a suburb of Chicago, Illinois and
                      now live on J2. I do lots of things with music: I sing in
                      the chamber choir and play piano in the Emerson program.
                      I've also played jazz, marching, and percussion music
                      before. Ask me about anything music! I'm also a fan of
                      baseball and can be found on J2 watching the Cubs game or
                      going to Fenway to watch the Red Sox.
                    </p>
                    <p>
                      You can find me procrastinating by watching sitcoms like
                      Friends, The Office, Big Bang Theory, etc., cooking on J2,
                      or occasionally going sailing on the Charles.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      J Entry is like a college family. Everyone here brings
                      something completely different to the entry, which is
                      exactly what makes it such a great community. People take
                      the time to get to know you, and sometimes procrastinating
                      with others is more important/fun than psets!
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://youtu.be/GfGN7bfohms">
                        https://youtu.be/GfGN7bfohms
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Theresa</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/theresa.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">
                        7&21W
                      </span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2019</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      I'm from small town New Hampshire. I barely made it out
                      alive. Don't live in small town New Hampshire. Now, I'm
                      Nina's college mom. I have to make sure she doesn't break
                      anything (read: herself) or start a fire or scare anyone
                      too much. Every day is an exciting new adventure.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>They're some pretty cool people.</p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://www.youtube.com/watch?v=gfAMycSPLh0">
                        https://www.youtube.com/watch?v=gfAMycSPLh0
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Annika</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/annika.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">16</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2018</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hi! I'm a lightweight rower and wannabe Canadian who
                      enjoys spending my free time terrorizing J-1 in a pikachu
                      onesie. I enjoy music, art, running, and making it my
                      mission to kick ass, go to space, and represent the human
                      race.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      I love the quirkiness and the genuine support and care
                      that everyone shows for each other here. Whenever I'm
                      having a bad day or need help with something, my entry is
                      always there to make it better.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://www.youtube.com/watch?v=uE-1RPDqJAY">
                        https://www.youtube.com/watch?v=uE-1RPDqJAY
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>David</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/david.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">5</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2018</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      David is a low-key jenizen who tends to listen to solid jams
                      and read comic books in his free time. He has a strong
                      interest in chemistry and the other natural sciences, and
                      appreciates odd puns, stoic wit, and dark humor. The only
                      thing he likes more than sarcasm is writing about himself in
                      the third person.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      Well, it is quite simply the least bad place to be. Also,
                      the people are pretty ok, too.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      If you ever want to feel confused:{" "}
                      <a href="https://youtu.be/mBNKUda-s6M">
                        https://youtu.be/mBNKUda-s6M
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Ethan</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/ethan.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-3</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2018</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      I like pop-tarts, ham and cheese sandwiches, and Arizona
                      Black and White Tea.
                    </p>
                    <p>
                      Outside of these, I enjoy things such as Star Wars (though I
                      do not subscribe to Disney's new canon), Back to the Future,
                      Civilization, GTA, Skyrim, Mass Effect, Star Trek,
                      Spongebob, and some other stuff. I also enjoy traveling and
                      hiking, but there aren't too many opportunities for that
                      around here. For a full list of my interests, please contact
                      me at epw@alum.mit.edu.
                    </p>
                    <p>
                      In my free (procrastination) time, I'll lay on my futon and
                      watch Netflix, bum around Boston, play some games, or do
                      some indie game dev.{" "}
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>Because it's the best.</p>
                    <p>
                      When I participated in in-house rush, many entries wowed me
                      with their quirks, food, and conversation. J Entry, however,
                      provided me with a little more. I made real connections, and
                      was able to be completely myself without feeling whatsoever
                      out of place. I could tell from the start that I would make
                      great friends here.
                    </p>
                    <p>
                      We play video games, watch movies, troll each other (if you
                      need trolling lessons just come over to J2 and ask for
                      Kevin), eat food, walk around Boston, playfully debate, make
                      art, and meme together.
                    </p>
                    <p>
                      This isn't a complete list. But whether you need a debate
                      about austerity measures in Greece, pop-tarts, movie and
                      music suggestions, someone to go on late night adventures
                      with you, or spare paperclips to bind a pset together, you
                      can find it here.{" "}
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      If you ever want to feel confused:{" "}
                      <a href="https://youtu.be/WqnXp6Saa8Y">
                        https://youtu.be/WqnXp6Saa8Y
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>James</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/james.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">18C</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2018</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Seek James only if you can handle learning about random
                      math and algorithms that will haunt your thinking until
                      you accept the true nature of reality. (A challenger
                      approaches!?)
                    </p>
                    <p>
                      James also enjoys strategy games, and wrestling drop
                      bears.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      An entry full of interesting, honest, and sarcastic
                      people. What's there not to love?
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="http://devopsreactions.tumblr.com/post/110529123748/lockess-algorithm">
                        lockess-algorithm
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Jeremy</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/jeremy.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">14</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2018</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      A course 14 pretentious tryhard from northern Michigan. I
                      spend most of my free time chilling around J Entry, at
                      Hayden Library or listening to hipster trash (e.g. indie
                      rock, experimental electronic, and hip hop). Sometimes I
                      play Civilization and then remember how bad I am at it and
                      stop.
                    </p>
                    <p>
                      Interests include: Whining about the system,
                      procrastinating, apple juice, listening to vaporwave at
                      4AM while eating pizza rolls
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      J Entry is a cool, caring community (but not in a cheesy
                      70's sitcom kind of way); your friends here will always
                      look out for you. It's a great group of people from
                      diverse interests and backgrounds, and we've also got a
                      (relatively) laid-back culture. Also sometimes we go to
                      IHOP at 2AM which is excellent.
                    </p>
                    <p>9.3/10 Best New Entry</p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://www.youtube.com/watch?v=IOwrDLoma2w">
                        I hope you like the weather channel a lot.
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Jonathan</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/jonathan.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">3</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2018</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hey, its nice to meet youse guys. My name is Jonathan and
                      I'm from the wonderful city of Philadelphia. I'm really
                      fascinated by how materials limit our technological world.
                      Why try to come up with a clever contraption when really
                      what’s standing in your way is the need for nickel based
                      super alloys for turbine or rocket engines, gallium arsenide
                      based semiconductors for high frequency computing, or
                      samarium-cobalt magnets for fusion powered tokamaks. I also
                      have an eye to the sky because this rock that we seem to
                      have started on, I think, is just the beginning. Stick
                      around and I would be delighted to have a chat with you.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      J-Entry is easy going, approachable, and fun. We are all
                      pretty low key people that you can see yourself playing your
                      favorite game with, watching a movie, or maybe even knocking
                      out a few problem sets. We're like Jello, but please, only
                      the green kind, not the red, the red is just nasty I
                      honestly cant figure out why people even serve that chaff to
                      people these days. Anyways, like Jello, we bounce around
                      while remaining a relatively comfortable, consistent facet
                      of your residential life.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="http://thebacklabel.com/wp-content/uploads/2014/05/bill-gates-desk-picture.jpg">
                        My favorite person
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Joseph</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/joseph.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">
                        8 and 6
                      </span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2018</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      The people of J Entry are kind, considerate, and as a
                      whole fun to be around, with their quirky humor and unique
                      ways of having fun.
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Joyce</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/joyce.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-2</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2018</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Joyce is your not-self-proclaimed (I swear) guru of indie or
                      roguelike games such as Crypt of the Necrodancer and The
                      Binding of Isaac: Afterbirth. She also does occasionally
                      hype about other worthy video games such as Dark Souls,
                      Bloodborne, and more! Feel free to start a conversation at
                      your own risk. (You'll either be judged or praised for your
                      plebeian tastes.) Other keywords that may be associated with
                      Joyce are: 'art', 'salt', 'puns', and sometimes, 'DIOOO'.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      Sarcastic, funny, and interesting peeps. I'm terrible at
                      writing these descriptions because there are too many
                      adjectives. Every individual brings a different element of J
                      to the table. Sometimes it results in utter chaos, but in a
                      good way.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://youtu.be/nfdEdE96En0">
                        https://youtu.be/nfdEdE96En0
                      </a>
                    </p>
                    <p>
                      <a href="https://i.imgur.com/U0iADj9.gifv">
                        https://i.imgur.com/U0iADj9.gifv
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Richard</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/richard.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">2</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2018</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      I am J's resident Brit, sharing the delights of the Isles
                      with the other members of the Entry and the people of
                      America: devotion to Queen and country; appreciation for
                      British wit and charm; a taste for tea and the other finer
                      things in life; education in the correct spelling of things.
                      I am course 2 with a passion for course 22 and will probably
                      end up double majoring. I enjoy running (especially
                      spontaneous sprint races), play the guitar from time to
                      time, and juggle when the feeling takes me.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      Though it has become something of a cliché, I think it is
                      right to state that the people in J enjoy working hard and
                      playing hard. There are always people in the lounge to have
                      a chat and banter with; when you need some quiet, you will
                      be able to find a place to work in peace. We have a large
                      range of complementary personalities and lots of different
                      interests, and I found it very easy to fit in.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://youtu.be/PeihcfYft9w">
                        https://youtu.be/PeihcfYft9w
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>David</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/david_p.jpg"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-2</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2017</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hi! I'm David AKA "Brit number two". I am J's resident
                      exchange student from the other Cambridge. I am the host
                      of the J1 cooking show "Cooking with David" and I enjoy
                      Doctor Who, fun times, and sleeping. I'm enjoying
                      exploring the New England area before returning to the
                      original England. You can find in the main lounge at all
                      times, usually psetting, or avoiding psetting.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      J entry is a wonderful place full of kindness and humour
                      with many wonderful people
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Greg</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/greg.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-2</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2017</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Freshly returned from my journey abroad to the unknown
                      land that was Cambridge, I am a rising senior in Course
                      6-2 with interests in Big Data and AI. I more than pumped
                      to bring back my appetite and trolling that roamed the J2
                      hallways two years ago.
                    </p>
                    <p>
                      Despite my absence, some things have not changed to the
                      best of my knowledge. How many more people have rid the
                      entire T?
                    </p>
                    <p>
                      Outside of collective suffering on problem sets, I like to
                      spend my time watching TV (TBBT FTW), eating, trolling,
                      singing, procrastinating, programming, blowing things up
                      (safely). I would have added sleeping, but my brain and
                      body still seem to have a disagreement about whether it's
                      overrated.
                    </p>

                    <h4>Why I Love J Entry:</h4>
                    <p>
                      Approachable, welcoming, and nice people, close to the
                      stairwell in the case of fire drills/real fires, and
                      kick-ass trolling culture on J2. I still have plenty of it
                      leftover from last year. :P
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      My life is absolutely miserable. There is nothing fun
                      about it.
                    </p>
                  </div>
                </div>
              </li>
              
              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Kevin</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/kevin.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-2</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2017</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hello! My name is Kevin and I live on J2. I am one of J
                      Entry's social chairs, so it's my job to make sure that
                      you have ample opportunity to meet people and get exposed
                      to all the shenanigans of the entry. I hail from New
                      Jersey and love things that go fast. I work on the Formula
                      SAE team at MIT and take cars very seriously. I'm one of
                      J2's insomniacs and you can always find me in my room at
                      3AM (sometimes working, sometimes just watching racecar
                      videos (because racecar)). I also really enjoy riding my
                      road bike with others when there isn't 3 feet of snow on
                      the ground.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      J entry is all about people. I think that the combination
                      of characters that we have in the entry is truly unique
                      and is endlessly entertaining. The sense of camaraderie in
                      the entry is really the distinguishing factor of J entry
                      and not every living group on campus has the same dynamic.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://www.youtube.com/watch?v=SLP9mbCuhJc">
                        https://www.youtube.com/watch?v=SLP9mbCuhJc
                      </a>,{" "}
                      <a href="https://www.youtube.com/watch?v=B-Wd-Q3F8KM">
                        https://www.youtube.com/watch?v=B-Wd-Q3F8KM
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Marian</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/marian.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">2</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">
                        2016.5
                      </span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      "I love cats, I love every kind of cat. I just wanna hug
                      all them, but I can't. ...Can't hug every cat."
                      JK...though that is one of my top favorite you-tube videos
                      right now. Anyway I love (most) all creatures big and
                      small, I love robots and mechanisms, I love arts and
                      crafts, and of course if you've ever spent any time with
                      me you'll know I love Hello Kitty, too ;D
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      So this might sound cheesy and/or it might be said a lot,
                      but J-entry is really my home away from home. The
                      residents really are my surrogate family, and in many
                      cases, even more awesome than my ""actual"" family, but
                      shhh don't tell them I said that ;p
                    </p>
                    <p>
                      I love that J is such a community and on any given
                      afternoon/evening there are usually at least a couple
                      people hanging out in the entry lounge, whether they're
                      psetting, watching a tv show, playing a video game, having
                      a lively debate, sharing a meal, or just chilling.
                    </p>
                    <p>
                      I'm so happy I found J and that I have the privilege of
                      living with such awesome people!
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://www.youtube.com/watch?v=sP4NMoJcFd4">
                        https://www.youtube.com/watch?v=sP4NMoJcFd4
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Matt</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/matt.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">Math</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2008</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hey! I'm a GRT along with Veena. You will probably see me
                      playing board games, computer games or watching a movie.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      J is an awesome place because of its residents. You won't
                      find a more fun, interesting, welcoming group of folks
                      anywhere else!
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://www.youtube.com/watch?v=HTPOSdyA7Uo">
                        https://www.youtube.com/watch?v=HTPOSdyA7Uo/
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Veena</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/veena.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">
                        HST/Biophysics (MD-PhD)
                      </span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2016</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hi! I graduated from MIT in 2009 but loved it so much I
                      stayed for grad school (x2, MD and PhD!). I like to run,
                      play board games, do research, and live in J-Entry as one
                      of your GRTs!
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      I love the people -- everyone in J is super friendly, and
                      its a great place to live!! There are always people to
                      hang out with :)
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Beckett</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/beck.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">2-OE</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2016</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hello! I'm a senior in J entry. It's a fabulous place.
                    </p>
                    <p>
                      I'm a lounge dweller - you'll find me hanging out in the
                      main lounge procrastinating or studying (50-50). You may
                      also find me tinkering in my room with my 3D printer. If
                      you need anything fixed, I have tools! :) I also go to
                      class haha.
                    </p>
                    <p>
                      I'm always happy to talk and down for a board game or a
                      game of pool.
                    </p>
                    <p>
                      Other cool thing - I've sailed across the Atlantic Ocean
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      J entry is a place to relax and unwind after a long drink
                      from the firehose, a good place to get work done while
                      around friends, a place where spontaneous music parties
                      (think the trollolol song) and a place where you'll find
                      people who will take care of you and look out for you.
                      Everyone is friendly and social - social meaning we like
                      talking to friends and leaving our doors open and going to
                      study breaks -- we don't throw parties involving
                      substances or loud music, though we do have spontaneous
                      reenactments of Star Wars lightsaber fights
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://www.youtube.com/watch?v=pKsvXfUvCkQ">
                        https://www.youtube.com/watch?v=pKsvXfUvCk
                      </a>,
                      <br />
                      <a href="https://www.youtube.com/watch?v=iWw5YdW57Es">
                        https://www.youtube.com/watch?v=iWw5YdW57Es
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Cristhian</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/cristhian.GIF"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-2</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2016</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Uh...just a regular dude living a regular life. Born and
                      raised in Texas to a family of Colombians (so I'm
                      automatically pretty awesome). Huge fan of Star Wars and
                      bad puns. Currently one of J's co-entry chairs so I help
                      things get done :D
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      I can be myself in J. I can hang out with and talk about
                      the most random crap with people at almost anytime. People
                      even appreciate bad jokes and puns! :D It's a very relaxed
                      place filled with great people :)
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        https://www.youtube.com/watch?v=dQw4w9WgXcQ
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Kristin</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/kristin.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-3</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2015</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Android developer, 6.01 TA, connoisseur of memes and the
                      Internet at large. Nintendo fangirl and sick Skyrim
                      spellsword. I like books and Netflix (omg Game of
                      Thrones). I enjoy lounging and lolz.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      I was basically adopted by J entry my junior year, after
                      forming a p-set group with a couple residents. I was
                      amazed at how welcoming and friendly the entry is and how
                      quickly I became friends with anybody new I met while
                      working in the lounge. Soon enough it was obvious that I
                      should move in with all of my favorite people, so I could
                      stop walking over freezing in my pajamas to play Pokemon
                      at 2am instead. J entry is the most caring and supportive
                      community I've encountered at MIT, and if you're facing a
                      tough week you can be certain there are friends here who
                      will cheer you up, help you out, and maybe even surprise
                      you with late-night chocolate cake. And that's not to
                      mention all the shenanigans we get up to involving bad
                      puns, worse trolls, and spontaneous adventures. It's home!
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="http://sunshin3x5arcasm.tumblr.com/">
                        http://sunshin3x5arcasm.tumblr.com/
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Sarah</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/sarah.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">10B</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2015</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      I'm pretty regular. I did a lot of stuff at MIT - I was in
                      a sorority, and part of Gospel Choir, E33, DanceTroupe,
                      and MacG exec, so I was never bored. I'm a decent cook,
                      and always down for sharing. I got introduced to Doctor
                      Who my sophomore year and fell in love - and possibly
                      binge watched it for the next two years. I love chocolate
                      and our dessert study breaks. I think watching scary
                      movies on Halloween is a must, even though I can't handle
                      them. Apparently I make entertaining faces also. I
                      graduated this past year and am working for Accenture as a
                      technology consultant in the D.C. area.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      I had a bad dorm experience freshman year and was
                      considering leaving MIT after a difficult year. The J
                      entry GRT took me in and invited me to the annual senior
                      dinner. The other residents immediately started making fun
                      of me, so I knew I would fit in. I moved in after that and
                      found what I was looking for in a dorm - people to be
                      there when I was stressed or sad, to have intelligent (or
                      non-intelligent) conversations with, to say goodnight to,
                      to watch scary movies with, to go out to impromptu dinners
                      with, to watch Doctor Who with, and a million other
                      things. J entry is one of the main reasons I stayed at
                      MIT, and I can honestly say I don't have a single bad
                      memory of living there.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="https://video-iad3-1.xx.fbcdn.net/hvideo-xtp1/v/t42.1790-2/11855958_10154376475822316_297312034_n.mp4?efg=eyJybHIiOjY4NywicmxhIjo1MTJ9&rl=687&vabr=382&oh=75d2ecf456ed27b99d6fef5a2053fbc9&oe=55E1F88D">
                        This is me doing "Thriller" at my new "adult" job.
                      </a>
                    </p>
                  </div>
                </div>
              </li>

              

            <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Tricia</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/tricia.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">6-2</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">2015</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Greetings! I am Tricia, former Social Chair, Entry Chair,
                      Supreme Overlord of Reimbursements, Keeper of the Google
                      Docs, Crafter of Titles, and so on. My proudest
                      achievement is the formation of J2 as my legion of
                      underclassman trolls. I was a leader of the campaign to
                      educate all Jenizens in the things that are important in
                      life - namely great movies they should have seen, such as
                      Star Wars, The Lord of the Rings, and Back to the Future.
                      I enjoy video games, hiking, terrible puns, Star Wars and
                      Spongebob references, trolling Kevin, going on adventures
                      around Boston, and probably some other things.
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      It has been said before and it will be said again - the
                      best thing about J Entry is the people. I came to MIT
                      worried about making friends, so during REX I focused on
                      trying to find a place where I could make friends and be
                      happy. One night, as I was wandering through MacGregor, a
                      Jenizen found me and brought me to J. I had fun hanging
                      out in the lounge for a while that night with several
                      residents, but more importantly, I found myself coming
                      back again the next few nights. Hanging out in J was fun,
                      and felt naturally fun, not forced like a lot of REX
                      events, where it obviously isn't like that during the
                      school year (AKA most of the time). I genuinely love the
                      people in J, and I am so glad that it's where I wound up.
                      I even became Social Chair and later Entry Chair -
                      something I never would have seen myself getting involved
                      in before - because of how much I liked J and wanted to
                      make it even more awesome.
                    </p>
                    <p>
                      J Entry is a tight-knit place full of friendly, caring,
                      fun individuals, and above all else, feels like a home. J
                      was also just the right kind of fun for me - in a given
                      week, you might experience an all-night p-set party in the
                      main lounge (punctuated by our favorite YouTube videos),
                      covering the whole end of the hallway in a web of yarn
                      with your neighbors, a movie marathon, a spontaneous
                      outing into Boston, or a long chain of terrible, terrible
                      puns. The friends I have made in J are the closest I have.
                      Alas, four years is far too short a time to live among
                      such excellent and admirable Hobbits.
                    </p>
                    <h4>Just for Fun:</h4>
                    <p>
                      <a href="http://www.nomachetejuggling.com/2011/11/11/the-star-wars-saga-suggested-viewing-order/">
                        Everyone needs this.
                      </a>{" "}
                      <br />
                      <a href="http://cat-bounce.com/">And also this.</a>
                    </p>
                  </div>
                </div>
              </li>

              <li className="col-lg-3 col-md-2 col-sm-12 col-xs-12">
                <div className="resident">
                  <h3>Maria</h3>
                  <div className="resident_photo">
                    <img
                      className="img-responsive"
                      src="/entry/j/resident_photos/m.JPG"
                    />
                  </div>
                  <div>
                    <div className="bio-info-div">
                      Major:{" "}
                      <span className="bio-info-span bio-info-major">18</span>
                    </div>
                    <div className="bio-info-div">
                      Class Year:{" "}
                      <span className="bio-info-span bio-info-year">CME</span>
                    </div>
                  </div>
                  <div className="resident_info">
                    <h4>Bio:</h4>
                    <p>
                      Hi! I am Maria and even if I may seem grumpy sometimes I
                      am a nice person to talk to. Usually people enjoy making
                      fun of me because well, they have lots of reasons do do
                      that (you'll see), but mainly because I join them and mock
                      myself too. Anyways, as I am a mathmo, I have an equation
                      that describes me perfectly: MATHS+SALSA+FRUITS=LOVE!
                    </p>
                    <h4>Why I Love J Entry:</h4>
                    <p>
                      It feels like home! People seem to do nice things for no
                      reason... it doesn't feel like UK(or Romania) at all :){" "}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Residents;
