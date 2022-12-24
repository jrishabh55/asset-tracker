import { getAuth, signInWithCustomToken } from 'firebase/auth';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useFirebaseSession = () => {
  const session = useSession();
  const [status, setStatus] = useState(session.status);

  useEffect(() => {
    if (session && session.status === 'authenticated') {
      signInWithCustomToken(getAuth(), session.data.user).then(() => {
        setStatus('authenticated');
      });
    }
  }, [session]);

  useEffect(() => {
    if (session.status !== 'authenticated') {
      setStatus(session.status);
    }
  }, [session.status]);

  return { data: session.data, status };
};

export default useFirebaseSession;
