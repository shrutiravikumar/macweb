//var CSV = Npm.require('csv');

Events = new Mongo.Collection("prefrosh");
Events.remove({});

buffer=Assets.getText("prefrosh/prefrosh.tsv");
//console.log(buffer);

CSV().from(
    buffer,
    {comment: '#', delimiter: '|', quote: ''}
)
  .to.array( Meteor.bindEnvironment( function(data){
    //console.log(data);

    for(var row=0; row<data.length; row++) {
       var newRecord = {
            'name': data[row][0],
            'day': data[row][1],
            'time': data[row][2] + "-" + data[row][3],
            'location': data[row][4],
            'description': data[row][5],
        };

        Events.insert(newRecord);
    }
  } ));

Meteor.publish('prefrosh', function() {
  return Events.find();
});
