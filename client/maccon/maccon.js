Router.route("maccon");
Meteor.startup(function () {

  Template.maccon.rendered = function() {
    var HOURS = {
      weekend:{close:3, open:9},
      weekday:{close:2, open:9},
    }

    var HARDCODED = false
    var HARDCODERETURN = 'CLOSED FOR SUMMER'

    var OFFSET = 4 // Eastern time accounting for DST

    var OPEN = 'open'
    var CLOSED = 'closed'

    isMacConOpen = function() {
      if (HARDCODED) {
        $("#ismacconopen").removeClass()
        $("#ismacconopen").addClass("rainbow")
        return HARDCODERETURN
      }
      else {
        datetime = new Date()
        var status = MacConStatus(datetime)
        $("#ismacconopen").addClass(status)
        return status
      }
    }

    function MacConStatus(datetime) {
      day = datetime.getDay()
      hour = datetime.getUTCHours() - OFFSET

      // Sunday, Saturday
      if (day == 0 || day == 6) {
        when = HOURS.weekend
      }
      // Monday - Friday
      else {
        when = HOURS.weekday
      }

      return (hour < when.close || hour >= when.open) ? OPEN: CLOSED
    }

    setInterval(
      Session.set("prediction",isMacConOpen()),
      60000
    )
  }

  Template.maccon.helpers({
    prediction: function () {
      return Session.get("prediction")
    }
  });
})
