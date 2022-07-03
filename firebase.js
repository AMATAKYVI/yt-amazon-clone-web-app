import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database/';
const firebaseConfig = {
  apiKey: 'AIzaSyDwnQDIn-JRNMHv5PkpnS8ViU9cEsgedSo',
  authDomain: 'yt--app.firebaseapp.com',
  projectId: 'yt--app',
  storageBucket: 'yt--app.appspot.com',
  messagingSenderId: '464577716929',
  appId: '1:464577716929:web:1b638178a265b3dba4aa40',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const database = getDatabase(app);
export { db, auth, database };
