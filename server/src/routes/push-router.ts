import express from 'express';

const router: express.Router = express.Router();

router.get(
  '/subscribe',
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.json({ a: 'heelo' });
  }
);

export default router;
