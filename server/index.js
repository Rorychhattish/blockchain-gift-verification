const express = require('express');
const cors = require('cors');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();

app.use(cors());
app.use(express.json());

const MERKLE_ROOT =
'ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa';

const gifts = [
  "Toy Robot",
  "Lego Set",
  "Football",
  "Drone",
  "Gaming Mouse"
];

app.post('/gift', (req, res) => {
  try {

    const { name, proof } = req.body;

    console.log("\n========== New Request ==========");
    console.log(`Request received for: ${name}`);
    console.log(`Proof Length: ${proof.length}`);

    const isInTheList = verifyProof(
      proof,
      name,
      MERKLE_ROOT
    );

    console.log(`Verification: ${isInTheList}`);

    if (isInTheList) {

      const randomGift =
        gifts[Math.floor(Math.random() * gifts.length)];

      console.log(`Gift Sent: ${randomGift}`);
      console.log("=================================\n");

      res.send({
        success: true,
        gift: randomGift
      });

    } else {

      console.log("Access Denied");
      console.log("=================================\n");

      res.send({
        success: false,
        message: "You are not on the list :("
      });
    }

  } catch (err) {

    console.log("Server Error:", err);
    console.log("=================================\n");

    res.status(500).send({
      success: false,
      error: err.message
    });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});