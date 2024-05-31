// Generate Seed Phrase then address
//////////////////////////////////////////////////////////////////
// import { useState, useEffect } from 'react';
// import { generateSecretKey, } from '@stacks/wallet-sdk';
//
// const CreateNewWallet = () => {
//   const secretKey = generateSecretKey();
//
//   console.log("Your secret phrase:", secretKey);
//
//   return secretKey;
// };
//
// export default CreateNewWallet;
////////////////////////////////////////////

import React, { useState } from 'react';
import bip39 from 'bip39';


const CreateNewWallet: React.FC = () => {
  const [seedPhrase, setSeedPhrase] = useState('');

  const generateSeedPhrase = () => {
    const mnemonic = bip39.generateMnemonic(256); // 生成 256 位元組的助記詞
    setSeedPhrase(mnemonic);
  };

  return (
    <div>
      <button className="btn1" onClick={generateSeedPhrase}>Generate Seed Phrase</button>
      <p>{seedPhrase && `Your Seed Phrase:${seedPhrase}`}</p>
    </div>
  );
};

export default CreateNewWallet;
