import express from "express";
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});

// define the home page route
router.get("/", (req, res) => {
  const response = [
    {
      id: "1",
      name: "Spice 1",
    },
    {
      id: "2",
      name: "Spice 2",
    },
  ];
  res.send(response);
});

export { router as spices };
