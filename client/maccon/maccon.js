Router.route("maccon");
Meteor.startup(function () {

  Template.maccon.rendered = function() {
    var HOURS = {
      sunday:{close:0, open:12},
      monday:{close:0, open:15},
      tuesday:{close:0, open:15},
      wednesday:{close:0, open:15},
      thursday:{close:0, open:15},
      friday:{close:2, open:15},
      saturday:{close:2, open:12},
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

      switch(day) {
        case 0:
        when = HOURS.sunday
        break;
        case 1:
        when = HOURS.monday
        break;
        case 2:
        when = HOURS.tuesday
        break;
        case 3:
        when = HOURS.wednesday
        break;
        case 4:
        when = HOURS.thursday
        break;
        case 5:
        when = HOURS.friday
        break;
        case 6:
        when = HOURS.saturday
        break;
        default:
        when = HOURS.wednesday
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
