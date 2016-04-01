Housecomm = new Mongo.Collection("housecomm");
Housecomm.remove({});

buffer=Assets.getText("housecomm/housecomm.csv");

CSV().from(
    buffer,
    {comment: '#', delimiter: '|', quote: ''}
)
  .to.array( Meteor.bindEnvironment( function(data){
    for(var row=0; row<data.length; row++) {
       newRecord = {
            'role': data[row][0],
            // 'name': data[row][1],
            'name': "Satoshi Nakamoto",
            'email': data[row][2]
        };
        Housecomm.insert(newRecord);
    }
  } ));
Meteor.publish('housecomm', function() {
  return Housecomm.find();
});