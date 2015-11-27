Router.route("dininghall");

Meteor.startup(function() {
  Template.dininghall.rendered = function() {
    //$(".fc-content").popover()
    Calendar = React.createClass({
      render: function() {
        return (
          <div></div>
        )
      }
    })

    // React.render(
    //   <div>
    //     <Calendar />
    //   </div>, $('#dininghall')[0]
    // )
    $('#calendar').fullCalendar({
      googleCalendarApiKey: 'AIzaSyCvYfR--6Ps9s8l9XRQBYEP3czjb7-nBPY',
      eventSources: [
        {
          googleCalendarId: '85bp16q9pdrmfa4ggo6f18vka8@group.calendar.google.com'
        },
        {
          googleCalendarId: 'dga96kfvrdvtlstfciv7cl3mpk@group.calendar.google.com'
        }
      ],
      eventMouseover:function(event, jsEvent, view) {
        $(".eventTooltip .eventTitle").html(event.title)
        $(".eventTooltip .eventStartTime").html(event.start.format("hh:mm"))
        $(".eventTooltip .eventEndTime").html(event.end.format("hh:mm"))
        $(".eventTooltip").css({visibility:"visible"})
      },
      eventMouseout:function(event, jsEvent, view) {
        $(".eventTooltip").css({visibility:"hidden"})
        $(".eventTooltip .eventTitle").html("")
        $(".eventTooltip .eventStartTime").html("")
        $(".eventTooltip .eventEndTime").html("")
      },
      eventClick:function(event, jsEvent, view) {
        $("#existingEventStartDate").val(event.start.format("MM:DD:YYYY"))
        $("#existingEventStartTime").val(event.start.format("H:mm"))
        $("#existingEventEndDate").val(event.end.format("MM:DD:YYYY"))
        $("#existingEventEndTime").val(event.end.format("H:mm"))
        $("#existingEventTitle").val(event.title)
        $("#existingEventHost").val("Not implemented")
        return false
      },
      selectable:true,
      timeFormat: 'H(:mm)'
    })

    $('#editCalDisplay input[type=radio]').click(function() {
      console.log(this);
      $("#editCalDisplay input[name="+this.name+"]").parent().toggleClass('checked', false);
      $(this).parent().toggleClass('checked', this.checked);
    })

    $("#editSelectors #new").click(function(event) {
      $("#existingEventDisplay").toggleClass("hidden",true)
      $("#newEventDisplay").toggleClass("hidden",false)
    })

    $("#editSelectors #existing").click(function(event) {
      $("#newEventDisplay").toggleClass("hidden",true)
      $("#existingEventDisplay").toggleClass("hidden",false)
    })

    $("#newEventStartDate").datetimepicker({
      stepHour: 1,
      stepMinute: 5,
      altField: "#newEventStartTime",
      altFieldTimeOnly: true,
      altTimeFormat: "H:mm"
    })
    $("#newEventEndDate").datetimepicker({
      stepHour: 1,
      stepMinute: 5,
      altField: "#newEventEndTime",
      altFieldTimeOnly: true,
      altTimeFormat: "H:mm"
    })

    $("#existingEventStartDate").datetimepicker({
      stepHour: 1,
      stepMinute: 5,
      altField: "#existingEventStartTime",
      altFieldTimeOnly: true,
      altTimeFormat: "H:mm"
    })
    $("#existingEventEndDate").datetimepicker({
      stepHour: 1,
      stepMinute: 5,
      altField: "#existingEventEndTime",
      altFieldTimeOnly: true,
      altTimeFormat: "H:mm"
    })
  }
})
