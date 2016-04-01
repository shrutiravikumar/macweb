Router.route("dininghall");

Meteor.startup(function() {
  Template.dininghall.rendered = function() {
    //$(".fc-content").popover()
    //TODO: move everything to React instead of Blaze
    Calendar = React.createClass({
      render: function() {
        return (
          <div></div>
        )
      }
    })
    var currentEvent= '';
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
        //TODO: determine whether this patch must also by applied to event.start
        if(!!event.end)
        $(".eventTooltip .eventEndTime").html(event.end.format("hh:mm"))
        $(".eventTooltip").css({visibility:"visible"})

        Meteor.call('getCalendarEvent',event.id, function(err, response) {
          // $(".eventTooltip .eventHost").html(response.attendees[0].displayName)
            $(".eventTooltip .eventHost").html("Satoshi Nakamoto")
          $(".eventTooltip .eventLocation").html(response.location)
        });
      },
      eventMouseout:function(event, jsEvent, view) {
        $(".eventTooltip").css({visibility:"hidden"})
        $(".eventTooltip .eventTitle").html("")
        $(".eventTooltip .eventStartTime").html("")
        $(".eventTooltip .eventEndTime").html("")
        $(".eventTooltip .eventHost").html("")
        $(".eventTooltip .eventLocation").html("")
      },
      eventClick:function(event, jsEvent, view) {
        $("#existingEventStartDate").val(event.start.format("MM-DD-YYYY"))
        $("#existingEventStartTime").val(event.start.format("H:mm"))
        //TODO: determine whether this patch must also by applied to event.start
        if(!!event.end) {
          $("#existingEventEndDate").val(event.end.format("MM-DD-YYYY"))
          $("#existingEventEndTime").val(event.end.format("H:mm"))
        }
        $("#existingEventTitle").val(event.title)
        currentEvent = event;

        Meteor.call('getCalendarEvent',event.id, function(err, response) {
          // $("#existingEventHost").val(response.attendees[0].displayName)
            $("#existingEventHost").val("Satoshi Nakamoto")
          var eventInDS = response.location == "Dance Studio"
          $("label[for=existingds]").toggleClass('checked', eventInDS)
          $("label[for=existingdh]").toggleClass('checked', !eventInDS)
          currEvent = response
        });

        $("#editCalDisplay label[for=existing]").toggleClass('checked', true)
        $("#editCalDisplay label[for=new]").toggleClass('checked', false)
        $("#newEventDisplay").toggleClass("hidden",true)
        $("#existingEventDisplay").toggleClass("hidden",false)
        return false
      },
      dayClick: function(date,jsEvent,view) {
        return false
      },
      header: {
        left: 'today,month,agendaWeek,agendaDay',
        center: 'title',
        right: 'prev,next'
      },
      selectable:true,
      timeFormat: 'H(:mm)'
    })

    $('.selectors-container input[type=radio]').click(function() {
      $(".selectors-container input[name="+this.name+"]").parent().toggleClass('checked', false);
      $(this).parent().toggleClass('checked', this.checked);
    })

    $(".selectors-container #new").click(function(event) {
      $("#existingEventDisplay").toggleClass("hidden",true)
      $("#newEventDisplay").toggleClass("hidden",false)
    })

    $(".selectors-container #existing").click(function(event) {
      $("#newEventDisplay").toggleClass("hidden",true)
      $("#existingEventDisplay").toggleClass("hidden",false)
    })

    $("#newEventStartDate").datetimepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: "mm-dd-yy",
      altField: "#newEventStartTime",
      altFieldTimeOnly: true,
      altTimeFormat: "H:mm"
    })
    $("#newEventEndDate").datetimepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: "mm-dd-yy",
      altField: "#newEventEndTime",
      altFieldTimeOnly: true,
      altTimeFormat: "H:mm"
    })

    $("#existingEventStartDate").datetimepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: "mm-dd-yy",
      altField: "#existingEventStartTime",
      altFieldTimeOnly: true,
      altTimeFormat: "H:mm"
    })
    $("#existingEventEndDate").datetimepicker({
      stepHour: 1,
      stepMinute: 5,
      dateFormat: "mm-dd-yy",
      altField: "#existingEventEndTime",
      altFieldTimeOnly: true,
      altTimeFormat: "H:mm"
    })

    $("#submitNewEvent").click(function(){
      var startDate = $("#newEventStartDate").val()
      var startTime = $("#newEventStartTime").val()
      var start = moment(startDate+" "+startTime,"MM-DD-YYYY H:mm")

      var endDate = $("#newEventEndDate").val()
      var endTime = $("#newEventEndTime").val()
      var end = moment(endDate+" "+endTime,"MM-DD-YYYY H:mm")

      var host = $("#newEventHost").val()
      var summary = $("#newEventTitle").val()
      var location = $("[name=newSpaceToggle]:checked").val()

      var data = {}
      data.start = start.format("YYYY-MM-DDTHH:mm:ssZ")
      data.end = end.format("YYYY-MM-DDTHH:mm:ssZ")
      data.host = host
      data.summary = summary
      data.location = location
      console.log(data);
      Meteor.call("insertCalenderEvent",data,function(){})

      $("#newEventStartDate").val("")
      $("#newEventStartTime").val("")
      $("#newEventEndDate").val("")
      $("#newEventEndTime").val("")
      $("#newEventHost").val("")
      $("#newEventTitle").val("")
      $("#editCalDisplay input").parent().toggleClass('checked', false)
      $("#newEventDisplay").toggleClass("hidden",true)
    })

    $("#submitExistingEvent").click(function(){
      var startDate = $("#existingEventStartDate").val()
      var startTime = $("#existingEventStartTime").val()
      var start = moment(startDate+" "+startTime,"MM-DD-YYYY H:mm")

      var endDate = $("#existingEventEndDate").val()
      var endTime = $("#existingEventEndTime").val()
      var end = moment(endDate+" "+endTime,"MM-DD-YYYY H:mm")

      var host = $("#existingEventHost").val()
      var summary = $("#existingEventTitle").val()
      var location = $("[name=existingSpaceToggle]:checked").val()

      var data = {}
      data.start = start.format("YYYY-MM-DDTHH:mm:ssZ")
      data.end = end.format("YYYY-MM-DDTHH:mm:ssZ")
      data.host = host
      data.summary = summary
      data.location = location
      data.id = currentEvent.id

      Meteor.call("updateCalenderEvent",data,function(){})

      $("#existingEventStartDate").val("")
      $("#existingEventStartTime").val("")
      $("#existingEventEndDate").val("")
      $("#existingEventEndTime").val("")
      $("#existingEventHost").val("")
      $("#existingEventTitle").val("")
      $("#editCalDisplay input").parent().toggleClass('checked', false)
      $("#existingEventDisplay").toggleClass("hidden",true)
    })
  }
})
