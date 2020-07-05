const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://guilherme:G132.546t@ty@cluster0.o7nq8.mongodb.net/<dbname>?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true,
useUnifiedTopology: true });

client.connect( async err => {
  const collection = client.db("sample_airbnb").collection("listingsAndReviews");
  
  const documents = await collection.find({property_type: "House"}).toArray();
  console.log(documents);

  
  // perform actions on the collection object
  client.close();
});