import express from 'express';
import {
  postSubscription,
  postNotification,
} from '@src/controllers/push-controller';

const router: express.Router = express.Router();

router.post('/subscription', postSubscription);
router.post('/notification', postNotification);

export default router;
