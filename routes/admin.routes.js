import express from "express";
import jwt from "jsonwebtoken";
import { Admin } from "../db";

const router = express.Router();

router.post("/signup", (req, res) => {
  /* req.body get `email`, `password` & `name`
   * zod validate
   * check if email not already in database
   * hash the password
   * lowercase the email and Titlecase name
   * save the user to the database
   */
  return res.send("admin signs up");
});

router.post("/signin", (req, res) => {
  /* req.body get `email` & `password`
   * zod validate
   * check the user in database, return error if not present
   * bcrypt.compare the saved hashed password with the incoming password
   * return jwt token to the user if user is authenticated
   */
  return res.send("admin can sign in");
});

// create a new course
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
