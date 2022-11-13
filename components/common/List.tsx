import clsx from 'clsx';

import { FCC } from '@/globalTypes';

export type ListProps<T = any> = FCC<{
  options: T[];
  render?: (option: T) => JSX.Element;
  itemClassName?: string;
}>;

const List: ListProps = ({ itemClassName, options, render }) => {
  return (
    <ul className="text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {options.map((option, i) => (
        <li
          key={i}
          className={clsx('py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600', {
            [itemClassName]: !!itemClassName,
            'rounded-b-lg': i === options.length - 1,
            'rounded-t-lg': i === 0,
          })}>
          {render ? render(option) : option}
        </li>
      ))}
    </ul>
  );
};

export default List;
