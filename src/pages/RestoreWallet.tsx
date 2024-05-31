


const RestoreWallet = () => {
  return (
    <button className="btn2">
      Restore an existing wallet
    </button>
  );
};

export default RestoreWallet;

// import React, { useState } from 'react';
// import bip39 from 'bip39';

// const CreateNewWallet: React.FC = () => {
//   const [seedPhrase, setSeedPhrase] = useState('');

//   const generateSeedPhrase = () => {
//     const mnemonic = bip39.generateMnemonic(256); // 生成 256 位元組的助記詞
//     setSeedPhrase(mnemonic);
//   };

//   return (
//     <div>
//       <button className="btn1" onClick={generateSeedPhrase}>Create a new wallet</button>
//       <p>{seedPhrase && `Your Seed Phrase:${seedPhrase}`}</p>
//     </div>
//   );
// };