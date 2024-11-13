import { Router, Request, Response } from 'express';
import { client } from '../connexiondb'

const router = Router();

router.get('/', async (req: Request, res: Response)=> {
    try {
        await client.db("admin").command({ping:1});
        res.status(200).send("OK\n")
    } catch (error) {
        console.error('MongoDB est déconnecté :', error);
        res.status(500).send("KO\n")
    }
});

export default router;