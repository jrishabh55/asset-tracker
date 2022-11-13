import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
import { NextApiRequest, NextApiResponse } from 'next';

const addAssets = async (req: NextApiRequest, res: NextApiResponse) => {
  // do something
  const client = new PrismaClient();
  const { stopLoss, target, trigger, ...data } = req.body;

  let triggerObj: any;
  const user = {
    connect: {
      id: 'e8748946-f292-4936-9bda-ea51d22a9bce',
    },
  };

  const triggers = [];

  if (trigger) {
    triggers.push({
      triggerValue: dayjs().add(trigger.days, 'day').toDate(),
      user,
    });
  }

  if (stopLoss) {
    triggers.push({
      triggerType: 'STOP_LOSS',
      triggerValue: stopLoss.toString(),
      user,
    });
  }

  if (target) {
    triggers.push({
      triggerType: 'TARGET',
      triggerValue: target.toString(),
      user,
    });
  }

  if (triggers.length > 0) {
    triggerObj = {
      create: triggers,
    };
  }
  try {
    await client.userStock.create({
      data: {
        triggers: triggerObj,
        user,
        ...data,
      },
    });
    res.status(200).json({ message: 'success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message, message: 'error' });
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return addAssets(req, res);
  } else {
    // Handle any other HTTP method
  }
}
