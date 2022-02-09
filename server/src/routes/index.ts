import express from 'express';
import pushRouter from './push-router';

const router: express.Router = express.Router();

router.use('/push', pushRouter);
// router.use('/sse', sseRouter);

export default router;
