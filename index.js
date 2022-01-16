const {MongoClient, Collection}=require('mongodb')
const url='mongodb://localhost:27017'
const client =new MongoClient(url)
const dbname='e-com'
async function getData()
{
    let res=await client.connect()
    db=res.db(dbname)
    collection=db.collection('products');
    let data= collection.find({}).toArray();
    let data1= collection.find({name:"Apples"}).toArray();
    Promise.all
    console.log(data)

}
getData()
// show data from mongo 



