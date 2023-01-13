import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import {} from 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyArVn4lIve8y0gYHsT9wxabN8mSInZTxVo',
  authDomain: 'react-hooks-blog-9edf1.firebaseapp.com',
  projectId: 'react-hooks-blog-9edf1',
  storageBucket: 'react-hooks-blog-9edf1.appspot.com',
  messagingSenderId: '558018229957',
  appId: '1:558018229957:web:485f51cff4eda689d462ac',
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
