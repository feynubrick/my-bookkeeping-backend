import express from 'express';
import { Request, Response } from 'express';

import { requestLogger as requestLoggerMiddleware } from './middlewares/request-logger';

const app = express();
const port = 3000;

app.use(requestLoggerMiddleware);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
