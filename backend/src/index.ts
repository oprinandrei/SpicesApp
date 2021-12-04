import express from "express";
// API Routes imports
import { spices } from "./routes/spices.route";
import { recipes } from "./routes/recipes.route";

const app = express();
const port = 8080; // default port to listen

app.use("/spices", spices);
app.use("/recipes", recipes);

// start the Express server
app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
