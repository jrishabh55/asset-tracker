import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyD2i8-KDfRHna9651EQ1KWkgUBSZikWc54',
  appId: '1:138192027042:web:08c64d297b19402ac0c6fb',
  authDomain: 'asseter-codeation.firebaseapp.com',
  measurementId: 'G-QV4ZWQN79K',
  messagingSenderId: '138192027042',
  projectId: 'asseter-codeation',
  storageBucket: 'asseter-codeation.appspot.com',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;

export const updateNotificationToken = async () => {
  const currentToken = getToken(getMessaging(app), {
    vapidKey: process.env.NEXT_PUBLIC_API_URL,
  });
  if (currentToken) {
    console.log('Got FCM token:', currentToken);
  } else {
    console.log('No registration token available. Request permission to generate one.');
    askPermission();
  }
};

export const askPermission = async () => {
  return new Promise(function (resolve, reject) {
    const permissionResult = Notification.requestPermission(function (result) {
      resolve(result);
    });

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  }).then(function (permissionResult) {
    if (permissionResult !== 'granted') {
      throw new Error("We weren't granted permission.");
    }
  });
};
