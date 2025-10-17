import express from "express";
const router = express.Router();

router.post("/signup", (req, res) => {
  return res.send("this is /user/signup");
});

router.post("/signin", (req, res) => {
  return res.send("this is /user/signin");
});

// list all purchased courses
router.get("/purchases", (req, res) => {
  return res.send("this is /user/purchases");
});

export default router;
