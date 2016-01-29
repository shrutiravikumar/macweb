//var CSV = Npm.require('csv'); 

Supports = new Mongo.Collection("supports");
Supports.remove({});

buffer=Assets.getText("support/sources.csv");
//console.log(buffer);

CSV().from(
    buffer,
    {comment: '#', delimiter: ',', quote: ''} 
)
  .to.array( Meteor.bindEnvironment( function(data){
    //console.log(data);

    for(var row=0; row<data.length; row++) {
       newRecord = {
            'role': data[row][0],
            'name': data[row][1],
            'contact': data[row][2]
        };
        
        Supports.insert(newRecord);
    }
  } ));

Meteor.publish('supports', function() {
  return Supports.find();
});