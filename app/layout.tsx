import '../styles/globals.scss';

import Link from 'next/link';

import AuthContext from '@/auth/context';
import TopNav from '@/components/common/TopNav';

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <head>
        <title>Head</title>
      </head>
      <body>
        <AuthContext session={session}>
          <div className="bg-gray-900/10 dark:bg-gray-800 min-h-screen flex flex-col w-full">
            <header>
              <TopNav />
            </header>
            <main className="flex-grow w-full">{children}</main>
            <footer className="text-center p-2">
              Made with ❤️ by{' '}
              <Link className="hover:underline" href="https://rishabhjain.dev">
                Rishabh Jain
              </Link>
            </footer>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
