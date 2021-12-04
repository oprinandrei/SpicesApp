import express from "express";
// 3rd party packages
import dotenv from "dotenv";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// API Routes imports
import { spices } from "./routes/spices.route";
import { recipes } from "./routes/recipes.route";

const app = express();
dotenv.config();
const port = process.env.APP_PORT; // default port to listen
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

app.use("/spices", spices);
app.use("/recipes", recipes);

// start the Express server
app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
