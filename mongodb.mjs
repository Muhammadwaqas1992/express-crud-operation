import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://waqasrafi55:dbpasword@cluster0.ewkb1wu.mongodb.net/?retryWrites=true&w=majority";
export const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log(err);
        await client.close();
        process.exit(1)
    }
}
run().catch(console.dir);

process.on('SIGINT', async function () {
    console.log("app is terminating");
    await client.close();
    process.exit(0);
});



