import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateNewWallet from './pages/CreateNewWallet';
import RestoreWallet from './pages/RestoreWallet';


function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const navigate = useNavigate();

  const handleConnectWalletClick = () => {
    setIsWalletConnected(false);
    navigate('/CreateNewWallet');
    console.log("Connect wallet clicked");
  };
  const handleRestoreWalletClick = () => {
    setIsWalletConnected(false);
    navigate('/RestoreWallet'); 
    console.log("Restore wallet clicked");
};


  return (
    <div className="App">
        <a href="https://x.com/Stackey_btc" target="_blank" rel="noopener noreferrer">
          <img src="./stackeynobg.png" className="logo" alt="Stackey logo" />
        </a>
        <h1>Stackey</h1>
        <p>
          Create a new wallet to get started.
        </p>
      <div className='button-container'>
        <button className="btn1" onClick={handleConnectWalletClick} disabled={isWalletConnected}>
          Confirm
        </button>
        <button className="btn2" onClick={handleRestoreWalletClick} disabled={isWalletConnected}>
        Restore an existing wallet
      </button>
      <Routes>
        <Route path="/CreateNewWallet" element={<CreateNewWallet />} />
        <Route path="/RestoreWallet" element={<RestoreWallet />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;  