import { NotificationTrigger, UserStock } from '@prisma/client';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { FC } from 'react';

import KpiItem from '../common/KpiItem';

export type TriggerRowProps = NotificationTrigger & { stock: UserStock };

const TriggerRow: FC<TriggerRowProps> = ({ stock, triggerType, triggerValue }) => {
  let isPast = false;
  const value = triggerType === 'DATE' ? dayjs(triggerValue).format('DD/MM/YYYY') : triggerValue;

  if (triggerType?.toLowerCase?.() === 'date') {
    if (dayjs().diff(value, 'D') > 0) {
      isPast = true;
    }
  }
  return (
    <>
      <div className="flex justify-between">
        <div className="text-md flex-grow capitalize">
          <span>{stock.name}</span>
          <span className="text-xs inline-block ml-2 text-gray-500"> ({triggerType?.replaceAll('_', ' ')?.toLocaleLowerCase()})</span>
        </div>
        <KpiItem label={triggerType === 'DATE' ? 'Trigger Date' : 'Trigger Value'}>
          <span className={clsx({ 'text-red-500': isPast })}>{value}</span>
        </KpiItem>
      </div>
    </>
  );
};

export default TriggerRow;
