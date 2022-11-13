import clsx from 'clsx';

import { FCC } from '@/globalTypes';

const Card: FCC<{ className?: string; header?: string }> = ({ children, className, header }) => {
  return (
    <section
      className={clsx('shadow bg-gray-100/60 dark:bg-slate-700 p-2 pb-4 rounded-lg shadow-gray-500/50 space-y-4', {
        [className]: className,
      })}>
      {header && (
        <header className="border-b border-gray-800 pb-2 border-dashed">
          {header && <h2 className="text-2xl font-semibold text-blue-500">{header}</h2>}
        </header>
      )}
      <main>{children}</main>
    </section>
  );
};

export default Card;
