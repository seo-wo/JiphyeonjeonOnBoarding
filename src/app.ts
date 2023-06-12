import express, { Request, Response } from 'express';
import router from './routes'; //추가해 주세요

const app: express.Application = express();

app.get('/welcome', (req: Request, res: Response) => {
  res.send('welcome!');
});

app.use('/api', router); //추가해 주세요

export default app;