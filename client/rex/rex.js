Meteor.subscribe('rex')
Events = new Mongo.Collection("rex")

Template.rex.helpers({
  rex_events: function () {
  	return Events.find({}).fetch()
  }
});
