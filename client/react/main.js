import { mount } from "react-mounter";
import Macweb from "./Macweb.js";
import Support from "./Support.js";
import MacCon from "./MacCon.js";
import Prefrosh from "./Prefrosh.js";
import Housecomm from "./Housecomm.js";
import Desk from "./Desk.js";
import About from "./About.js";
import DiningHall from "./DiningHall";

(function(i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function() {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  "script",
  "https://www.google-analytics.com/analytics.js",
  "ga"
);

ga("create", "UA-66853834-1", "auto");
ga("send", "pageview");

// Routes for site navigation
FlowRouter.route("/", {
  action: function(params, queryParams) {
    mount(Macweb);
  }
});

FlowRouter.route("/about", {
  action: function(params, queryParams) {
    mount(About);
  }
});

FlowRouter.route("/desk", {
  action: function(params, queryParams) {
    mount(Desk);
  }
});

FlowRouter.route("/dininghall", {
  action: function(params, queryParams) {
    mount(DiningHall);
  }
});

FlowRouter.route("/housecomm", {
  action: function(params, queryParams) {
    mount(Housecomm);
  }
});
FlowRouter.route("/maccon", {
  action: function(params, queryParams) {
    mount(MacCon);
  }
});

FlowRouter.route("/cpw", {
  action: function(params, queryParams) {
    mount(Prefrosh);
  }
});

FlowRouter.route("/rex", {
  action: function(params, queryParams) {
    mount(Prefrosh);
  }
});
FlowRouter.route("/support", {
  action: function(params, queryParams) {
    mount(Support);
  }
});

FlowRouter.route("/(.*)", {
  action: function(params, queryParams) {
    mount(Macweb);
  }
});
