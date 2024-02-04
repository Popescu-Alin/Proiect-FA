const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://fa-database-f081d-default-rtdb.europe-west1.firebasedatabase.app",
});

const express = require("express");

const app = express();
const db = admin.firestore();

const cors = require("cors");
app.use(cors({ origin: true }));

// Routes
app.get("/hello-world", (req, res) => {
  return res.status(200).send("Hello World!");
});

// create
app.post("/api/register", (req, res) => {
  (async () => {
    try {
      const newUser = await db.collection("users").add({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      });
      const userData = { id: newUser.id, ...req.body };
      return res.status(200).send(userData);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// read
app.put("/api/login", (req, res) => {
  (async () => {
    try {
      const query = db.collection("users");
      const response = [];
      await query.get().then((querySnapshot) => {
        const docs = querySnapshot.docs;
        for (const doc of docs) {
          const selectedItem = {
            id: doc.id,
            userName: doc.data().userName,
            email: doc.data().email,
            password: doc.data().password,
            role: doc.data().role,
          };
          response.push(selectedItem);
        }
        return response;
      });
      const user = response.find((item) => item.email === req.body.email &&
        item.password === req.body.password);
      if (!user) {
        return res.status(404).send("User not found");
      }
      return res.status(200).send(user);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// get by id
app.get("/api/user", (req, res) => {
  (async () => {
    try {
      
      let user = db.collection("user").doc(req.id);
      if (!post) {
        return res.status(404).send("User not found");
      }
      return res.status(200).send(user);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});


// get all


// exports the api
exports.app = functions.https.onRequest(app);
