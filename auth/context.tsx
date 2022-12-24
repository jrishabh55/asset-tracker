'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';

import { FCC } from '@/globalTypes';

export interface AuthContextProps {
  children: React.ReactNode;
}

const AuthContext: FCC = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export const AuthChecker = () => {
  const session = useSession();
  useEffect(() => {
    if (session.status === 'loading') return;
    if (session.status === 'unauthenticated') {
      window.location.href = '/login';
    }
  }, [session]);

  return <></>;
};

export default AuthContext;
