Router.route("rex")

Meteor.subscribe('rex')
Events = new Mongo.Collection("rex")

Template.cpw.helpers({
  rex_events: function () {
  	return Events.find({}).fetch()
  }
});
