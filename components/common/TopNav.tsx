import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';

import { FCC } from '@/globalTypes';

import Button from '../button';

const NavLink: FCC<LinkProps> = ({ children, ...props }) => {
  return (
    <li>
      <Link
        className={clsx(
          'block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 capitalize',
        )}
        {...props}>
        {children}
      </Link>
    </li>
  );
};

const TopNav = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link className="flex items-center" href="/">
          <img alt="Flowbite Logo" className="mr-3 h-3 sm:h-6" src="https://codeation.io/images/codeation.io.svg" />
        </Link>
        <div className="flex md:order-2">
          <Link href="/assets/add">
            <Button bg="blue" type="button">
              Add assets
            </Button>
          </Link>
          <button
            aria-controls="navbar-cta"
            aria-expanded="false"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            data-collapse-toggle="navbar-cta"
            type="button">
            <span className="sr-only">Open main menu</span>
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                fillRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 md:flex-grow md:justify-end"
          id="navbar-cta">
          {/* <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink href="/assets/add">Add Assets</NavLink>
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
