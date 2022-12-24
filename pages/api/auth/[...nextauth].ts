import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import { getAuth } from 'firebase/auth';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

export default NextAuth({
  adapter: FirestoreAdapter({
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  }),
  callbacks: {
    session: async ({ session }) => {
      const returnSession = {
        ...session,
      };
      return returnSession;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});
