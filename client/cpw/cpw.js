Router.route("cpw");

Meteor.subscribe('cpw');
Events = new Mongo.Collection("cpw");

Template.cpw.helpers({
  cpw_events: function () {
		console.log(Events.find({}).fetch());

  	return Events.find({}).fetch();
	
  }
});