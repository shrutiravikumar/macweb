//var CSV = Npm.require('csv');

PeerMentors = new Mongo.Collection("peermentors");
PeerMentors.remove({});

buffer=Assets.getText("peermentors/peermentors.csv");
//console.log(buffer);

CSV().from(
    buffer,
    {comment: '#', delimiter: ',', quote: ''}
)
  .to.array( Meteor.bindEnvironment( function(data){
    //console.log(data);

    for(var row=0; row<data.length; row++) {
       newRecord = {
            'name': data[row][0],
            'email': data[row][1]
        };

        PeerMentors.insert(newRecord);
    }
  } ));

Meteor.publish('peermentors', function() {
  return PeerMentors.find();
});