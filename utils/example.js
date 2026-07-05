const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const verifyProof = require('./verifyProof');

const { keccak256 } = require('ethereum-cryptography/keccak');
const { utf8ToBytes, toHex } = require('ethereum-cryptography/utils');

// Convert all names to hashes (HEX format)
const hashedNiceList = niceList.map(name =>
    toHex(keccak256(utf8ToBytes(name)))
);

// Create Merkle Tree from hashed names
const merkleTree = new MerkleTree(hashedNiceList);

// Get root
const root = merkleTree.getRoot();

console.log("Merkle Root:");
console.log(root);

// Test name
const name = 'Norman Block';

// Hash the test name
const hashedName = toHex(
    keccak256(utf8ToBytes(name))
);

// Find index
const index = hashedNiceList.indexOf(hashedName);

// Generate proof
const proof = merkleTree.getProof(index);

// Verify proof
console.log(
    verifyProof(proof, hashedName, root)
); // true