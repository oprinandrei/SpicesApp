import express from "express";
// 3rd party packages
import dotenv from "dotenv";
// API Routes imports
import { spices } from "./routes/spices.route";
import { recipes } from "./routes/recipes.route";

const app = express();
dotenv.config();
const port = process.env.APP_PORT; // default port to listen

app.use("/spices", spices);
app.use("/recipes", recipes);

// start the Express server
app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
