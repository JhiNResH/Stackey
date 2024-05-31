// import React, { useState } from 'react';
// import { showConnect } from '@stacks/connect';

// const SigninGas: React.FC = () => {
//   const { connect } = showConnect();
//   const [showGasFeeMessage, setShowGasFeeMessage] = useState(false);

//   const handleConnect = async () => {
//     try {
//       await connect({
//         onAuthSuccess: () => {
//           console.log('Connected to Stackey');
//           setShowGasFeeMessage(true);
//         },
//         onAuthFailure: (error) => {
//           console.error('Failed to connect:', error);
//         },
//       });
//     } catch (error) {
//       console.error('Error connecting:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleConnect}>Connect to Stackey</button>
//       {showGasFeeMessage && <p>Gas fee will be applied for transactions.</p>}
//     </div>
//   );
// };

// export default SigninGas;