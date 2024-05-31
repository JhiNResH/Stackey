import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase project configuration
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function FirebaseRetrieve() {
  const [hash, setHash] = useState('');

  useEffect(() => {
    const docRef = doc(db, 'documents', 'hashDocument');
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists) {
          const retrievedHash = doc.data().hash;
          setHash(retrievedHash);
        } else {
          console.error('Document not found');
        }
      })
      .catch((error) => {
        console.error('Error retrieving document:', error);
      });
  }, []);

  return (
    <div>
      <h1>Firebase Hash Retrieval</h1>
      {hash && <p>Retrieved Hash: {hash}</p>}
    </div>
  );
}

export default FirebaseRetrieve;
