import express from "express";
const router = express.Router();

router.post("/signup", (req, res) => {
  return res.send("admin signs up");
});

router.post("/signin", (req, res) => {
  return res.send("admin can sign in");
});

// list all purchased courses
router.post("/course", (req, res) => {
  return res.send("create a new course");
});

// update a course
router.post("/course", (req, res) => {
  return res.send("update a given course");
});

// get all the courses created by the user
router.post("/course/list", (req, res) => {
  return res.send("here are all the courses you created");
});

export default router;
