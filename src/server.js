import express from 'express';
import primeRoute from './routes/prime.routes';

//instancia servidor express
const app = express();

//routes
app.use('/api/prime', primeRoute);

export default app;
