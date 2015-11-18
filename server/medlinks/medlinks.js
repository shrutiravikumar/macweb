//var CSV = Meteor.npmRequire('csv'); 

Medlinks = new Mongo.Collection("medlinks");
Medlinks.remove({});

buffer=Assets.getText("medlinks/medlinks.csv");
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
        
        Medlinks.insert(newRecord);
    }
  } ));

Meteor.publish('medlinks', function() {
  return Medlinks.find();
});
