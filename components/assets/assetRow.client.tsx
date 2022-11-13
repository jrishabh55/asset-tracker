'use client';
import { NotificationTrigger, UserStock } from '@prisma/client';
import dayjs from 'dayjs';
import { FC } from 'react';

import { FCC } from '@/globalTypes';

import Button from '../button';
import List from '../common/List';

const KpiItem: FCC<{ label: string }> = ({ children, label }) => {
  return (
    <div className="text-xs text-right flex flex-col">
      <span className="text-xxs text-gray-500">{label}</span>
      {children}
    </div>
  );
};

const AssetRow: FC<UserStock & { triggers?: NotificationTrigger[] }> = ({ name, purchasePrice, quantity, ticker, triggers }) => {
  return (
    <>
      <div className="flex justify-between items-center w-full gap-4">
        <div className="text-md flex-grow">
          <span>{name}</span>
          <span className="text-sm inline-block ml-2 text-gray-500"> ({ticker})</span>
        </div>
        <KpiItem label="Qty">{quantity}</KpiItem>
        <KpiItem label="Price">{purchasePrice}</KpiItem>
        <div>
          <Button size="sm">Trigger</Button>
        </div>
      </div>
      {triggers.length > 0 && (
        <details className="mt-3">
          <summary>Triggers</summary>
          <div className="mt-3 ml-3">
            <List
              options={triggers}
              render={(trig) => (
                <div className="flex justify-between">
                  <span className="capitalize font-semibold">{trig.triggerType?.toLowerCase()}</span>
                  <span className="text-xs">
                    {trig.triggerType === 'DATE' ? dayjs(trig.triggerValue).format('DD/MM/YYYY') : trig.triggerValue}
                  </span>
                </div>
              )}
            />
          </div>
        </details>
      )}
    </>
  );
};

export default AssetRow;
