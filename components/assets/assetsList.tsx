import { PrismaClient } from '@prisma/client';

import asyncComponent from '@/utils/asyncComponent';

import List from '../common/List';
import AssetRow from './assetRow.client';

const getAssets = () => {
  const client = new PrismaClient();
  return client.userStock.findMany({
    include: {
      triggers: true,
    },
  });
};

const AssetsList = async ({ onBtnClick }: { onBtnClick?: (id: string) => void }) => {
  const assets = await getAssets();

  return <List options={assets} render={(asset) => <AssetRow onBtnClick={onBtnClick} {...asset} />} />;
};

export default asyncComponent(AssetsList);
