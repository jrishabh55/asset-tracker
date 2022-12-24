'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { memo } from 'react';

import Button from '@/components/button';

const Login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button bg="blue" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
};

export default memo(Login);
