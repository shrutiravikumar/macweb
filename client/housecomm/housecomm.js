Meteor.subscribe('housecomm');
Housecomm = new Mongo.Collection("housecomm");

Template.housecomm.helpers({
  housecomm: function () {
   	return Housecomm.find({}).fetch();
  },
});