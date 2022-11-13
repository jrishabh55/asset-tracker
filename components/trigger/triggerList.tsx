import { PrismaClient } from '@prisma/client';

import asyncComponent from '@/utils/asyncComponent';

import List from '../common/List';
import TriggerRow from './triggerRow';

const getTriggers = () => {
  const client = new PrismaClient();
  return client.notificationTrigger.findMany({
    include: {
      stock: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export type TriggerListProps = {
  onBtnClick?: (id: string) => void;
};

const TriggerList = async ({ onBtnClick }: TriggerListProps) => {
  const assets = await getTriggers();

  return <List options={assets} render={(trigger) => <TriggerRow onBtnClick={onBtnClick} {...trigger} />} />;
};

export default asyncComponent(TriggerList);
