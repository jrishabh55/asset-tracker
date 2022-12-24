import clsx from 'clsx';
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import type { FCC } from '@/globalTypes';

import Spin from './Spin';

export type ButtonProps = FCC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    bg?: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'default';
    block?: boolean;
    loading?: boolean;
    size?: 'sm' | 'md' | 'lg';
  }
>;

const Button: ButtonProps = ({ bg = 'default', block = false, children, disabled = false, loading = false, size = 'md', ...props }) => {
  return (
    <button
      className={clsx('relative disabled:bg-opacity-70 disabled:cursor-not-allowed rounded text-white', {
        'bg-blue-500 hover:bg-blue-700': bg === 'blue',
        'bg-gray-600 hover:bg-gray-600/70': bg === 'default',
        'bg-green-500 hover:bg-green-700': bg === 'green',
        'bg-red-500 hover:bg-red-500/90': bg === 'red',
        'bg-yellow-500 hover:bg-yellow-700': bg === 'yellow',
        'block w-full': block,
        disabled: loading || disabled,
        'text-lg font-bold py-3 px-4': size === 'lg',
        'text-md font-bold py-2 px-4': size === 'md',
        'text-xs py-1 px-1': size === 'sm',
      })}
      disabled={disabled ?? loading}
      {...props}>
      <span className="relative">
        {loading && (
          <span>
            <Spin />
          </span>
        )}
      </span>
      {!loading && children}
    </button>
  );
};

export default Button;
