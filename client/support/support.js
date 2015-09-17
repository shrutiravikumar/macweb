Router.route("support");

Meteor.subscribe('supports');
Supports = new Mongo.Collection("supports");
Meteor.subscribe('medlinks');
Medlinks = new Mongo.Collection("medlinks");
Meteor.subscribe('peerears');
PeerEars = new Mongo.Collection("peerears");

Template.support.helpers({
  sources: function () {
   	return Supports.find({}).fetch();

  },
  medlinks: function () {
  	return Medlinks.find({}).fetch();
  },
  peerears: function () {
  	return PeerEars.find({}).fetch();
  }
});
