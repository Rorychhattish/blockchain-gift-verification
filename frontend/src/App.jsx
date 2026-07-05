import { useState } from 'react';
import axios from 'axios';
import MerkleTree from './utils/MerkleTree';
import niceList from './utils/niceList.json';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const getGift = async () => {
    try {
      console.log("Nice List:", niceList);

      // Build Merkle Tree
      const merkleTree = new MerkleTree(niceList);

      // Find index of entered name
      const index = niceList.findIndex(
        n => n.toLowerCase() === name.toLowerCase()
      );

      if (index === -1) {
        setResult('❌ Name not found in nice list');
        return;
      }

      // Generate proof
      const proof = merkleTree.getProof(index);

      console.log("Generated Proof:", proof);

      const response = await axios.post(
        'http://localhost:1225/gift',
        {
          name,
          proof
        }
      );

      console.log("Server Response:", response.data);

      if (response.data.success) {
        setResult(
          `🎁 Congratulations! You got: ${response.data.gift}`
        );
      } else {
        setResult(response.data.message);
      }

    } catch (err) {
      console.log("Full Error:", err);

      if (err.response) {
        console.log("Response Data:", err.response.data);
        console.log("Status:", err.response.status);
      }

      setResult('Server Error!');
    }
  };

  return (
    <div className="container">
      <h1>🎄 Blockchain Gift List</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={getGift}>
        Check Gift
      </button>

      <h2>{result}</h2>
    </div>
  );
}

export default App;