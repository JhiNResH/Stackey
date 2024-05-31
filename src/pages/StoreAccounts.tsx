// import React, { useState, useEffect } from 'react';
// import { useStore } from '@stacks/connect';
// import { createHash } from 'crypto';

// const StoreAccounts: React.FC = () => {
//   const { store } = useStore();
//   const [username, setUsername] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [credentials, setCredentials] = useState<{ username: string; password: string } | null>(null);

//   useEffect(() => {
//     // Retrieve stored credentials from Stacks storage
//     const storedCredentials = localStorage.getItem('credentials');
//     if (storedCredentials) {
//       try {
//         const parsedCredentials = JSON.parse(storedCredentials);
//         setCredentials(parsedCredentials);
//       } catch (error) {
//         console.error('Failed to parse stored credentials:', error);
//       }
//     }
//   }, []);

//   const handleStoreCredentials = async () => {
//     if (!username || !password) {
//       console.error('Username and password are required');
//       return;
//     }

//     // Hash the password for security
//     const hashedPassword = createHash('sha256').update(password).digest('hex');

//     const credentialsData = {
//       username,
//       password: hashedPassword,
//     };

//     // Store credentials in Stacks storage
//     await store.put('credentials', JSON.stringify(credentialsData));

//     // Update local state
//     setCredentials(credentialsData);

//     console.log('Credentials stored successfully');
//   };

//   const handleRetrieveCredentials = async () => {
//     if (!credentials) {
//       console.error('No credentials stored');
//       return;
//     }

//     setUsername(credentials.username);
//     setPassword(credentials.password);
//   };

//   return (
//     <div>
//       <h1>Store your account</h1>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(event) => setUsername(event.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />
//       <button onClick={handleStoreCredentials}>Store</button>
//       <button onClick={handleRetrieveCredentials}>Retrieve</button>
//       {credentials && (
//         <div>
//           <p>Username:{credentials.username}</p>
//           <p>Password:{credentials.password}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StoreAccounts;
