import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const uri : string = process.env.DB_CONN_string|| '';

const client = new MongoClient(uri);

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log('Connexion réussie à MongoDB');
    } catch (err) {
        console.error('Erreur de connexion à MongoDB :', err);
        process.exit(1)
    }
}
export { connectToDatabase, client };