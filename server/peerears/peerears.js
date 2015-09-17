//var CSV = Meteor.npmRequire('csv');

PeerEars = new Mongo.Collection("peerears");
PeerEars.remove({});

buffer=Assets.getText("peerears/peerears.csv");
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
            'entry': data[row][1],
            'email': data[row][2]
        };

        PeerEars.insert(newRecord);
    }
  } ));

Meteor.publish('peerears', function() {
  return PeerEars.find();
});
