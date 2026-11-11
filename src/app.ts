import express from 'express';
import type { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';


const app = express();


if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}


app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});


app.use((_req: Request, res: Response) => {
  res.status(404).json({ errors: { route: ['not found'] } });
});


app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ errors: { server: ['internal server error'] } });
});

export default app;