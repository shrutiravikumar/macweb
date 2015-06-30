Router.route("support");

Meteor.subscribe('supports');
Supports = new Mongo.Collection("supports");
Meteor.subscribe('medlinks');
Medlinks = new Mongo.Collection("medlinks");

Template.support.helpers({
  sources: function () {
   	return Supports.find({}).fetch();
	
  },
  medlinks: function () {
  	return Medlinks.find({}).fetch();
	
  }
});