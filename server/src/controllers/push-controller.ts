import express from 'express';
import webpush from 'web-push';
import createError from 'http-errors';
import { IResData } from '@src/types/types';
import { PUSH_PRIVATE_KEY, PUSH_PUBLIC_KEY } from '@src/config/secret';

/* key generation
const vapidKeys = webpush.generateVAPIDKeys();
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
*/

webpush.setVapidDetails(
  'mailto:abc@server.com',
  PUSH_PUBLIC_KEY,
  PUSH_PRIVATE_KEY
);

const subscriptions = {};

export const postSubscription = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { subscription } = req.body;
    subscriptions[1] = JSON.parse(subscription);

    const result: IResData = {
      status: 'success',
      message: 'subscribed server',
    };
    return res.json(result);
  } catch (err) {
    return next(createError(500, (err as Error).message));
  }
};

export const postNotification = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    const { content } = req.body;

    const payload = JSON.stringify({
      title: 'push alarm (title)',
      body: `push alarm (body): ${content}`,
      tag: 'push tag(tag)',
    });

    await webpush.sendNotification(subscriptions[1], payload);

    const result: IResData = {
      status: 'success',
      message: 'notified server',
    };
    return res.json(result);
  } catch (err) {
    return next(createError(500, (err as Error).message));
  }
};
