import express, { Express, Request, Response } from 'express';

const app: Express = express();

// Middleware
app.use(express.json());

// Routes
app.get('/healthcheck', (_req: Request, res: Response) => {
  res.status(200).send('OK')
});

export default app;