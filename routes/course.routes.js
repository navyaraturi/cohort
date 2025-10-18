import express from "express";
const router = express.Router();

// get all the available courses
router.get("/all", (req, res) => {
  return res.send("Here is the list of all the courses");
});

// purchase a new course
router.post("/purchase", (req, res) => {
  return res.send("tell me which course to buy");
});

export default router;
