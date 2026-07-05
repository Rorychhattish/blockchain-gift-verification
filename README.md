# 🎄 Merkle Tree Gift Verification

## Overview

Merkle Tree Gift Verification is a blockchain-inspired application that uses **Merkle Trees** and **Merkle Proofs** to securely verify whether a user is eligible to receive a gift.

The application demonstrates how Merkle Trees can be used for efficient and secure membership verification, similar to techniques used in blockchain systems.

---

## ✨ Features

* Generate Merkle Trees from a list of eligible users
* Generate Merkle Proofs for users in the nice list
* Secure proof verification on the backend
* Random gift distribution for verified users
* Interactive React-based user interface
* Client-server communication using Axios
* Request logging and verification tracking
* Blockchain-inspired verification mechanism

---

## 🛠️ Tech Stack

* **Frontend:** React.js, Vite, Axios
* **Backend:** Node.js, Express.js
* **Cryptography:** Ethereum Cryptography
* **Data Structure:** Merkle Tree

---

## 📂 Project Structure

```text
Blockchain-Gift-List/
│
├── server/          # Express backend server
├── frontend/        # React frontend application
├── utils/           # Merkle Tree and verification utilities
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Rorychhattish/blockchain-gift-verification.git
cd blockchain-gift-verification
```

Install backend dependencies:

```bash
npm install
```

Install frontend dependencies:

```bash
cd frontend
npm install
```

---

## 🚀 Running the Application

### Step 1: Start the Backend Server

From the project root directory:

```bash
node server/index
```

The backend server will run on:

```text
http://localhost:1225
```

---

### Step 2: Start the React Frontend

Open a new terminal and run:

```bash
cd frontend
npm run dev
```

The frontend application will run on:

```text
http://localhost:5173
```

Open the URL in your browser.

---

## 🔐 System Architecture

```text
React Frontend
       │
       │ Name + Merkle Proof
       ▼
Express Backend
       │
       │ verifyProof()
       ▼
Merkle Root
       │
       ▼
Gift Verification
```

## 📚 Key Concepts

- Merkle Tree construction
- Merkle Proof generation
- Proof verification
- Client-server communication
- Blockchain-inspired authentication
- Cryptographic hashing


## 👨‍💻 Author

**Chhatish Kumar Sah**
GitHub: https://github.com/Rorychhattish
