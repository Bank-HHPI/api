import dotenv from 'dotenv';
import express, {Request, Response} from 'express';
import HealthcheckRoutes from './Routes/Healthcheck'
import { connectToDatabase } from './connexiondb';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/healthcheck', HealthcheckRoutes);
const API_PORT=process.env.API_PORT;
const main = async () =>{
    connectToDatabase();
    app.listen(API_PORT, () => {
        console.log(`server running on http://localhost:${API_PORT}`);
    }
    
    
    
    )





}
main();