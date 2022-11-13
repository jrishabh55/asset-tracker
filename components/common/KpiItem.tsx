import { FCC } from '@/globalTypes';

const KpiItem: FCC<{ label: string }> = ({ children, label }) => {
  return (
    <div className="text-xs text-right flex flex-col">
      <span className="text-xxs text-gray-500 select-none">{label}</span>
      {children}
    </div>
  );
};

export default KpiItem;
