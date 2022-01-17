const {MongoClient, Collection}=require('mongodb')
const url='mongodb://localhost:27017'
const client =new MongoClient(url)
const dbname='e-com'
async function getData()
{
    let res=await client.connect()
    db=res.db(dbname)
    collection=db.collection('products');
    let data=await collection.find({}).toArray();
   

    console.log(data)

}
getData()
// show data from mongo 



