import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
import { NextApiRequest, NextApiResponse } from 'next';

import buildApiRoutes from '@/utils/buildApiRoutes';

const addAssets = async (req: NextApiRequest, res: NextApiResponse) => {
  // do something
  const client = new PrismaClient();
  const { stopLoss, target, trigger, user: userObj, ...data } = req.body;

  if (!userObj) {
    return res.status(400).json({ message: 'User is required' });
  }

  const user = {
    connect: {
      id: userObj.id,
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

  try {
    const count = await client.userStock.count({ where: { name: data.name, userId: userObj.id } });

    if (count > 0) {
      return res.status(400).json({ message: 'Stock already exists' });
    }

    await client.userStock.create({
      data: {
        triggers: {
          create: triggers,
        },
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

export default buildApiRoutes({
  post: addAssets,
});
