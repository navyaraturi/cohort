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
  /* constraint: is a protected route, needs to be admin
   * req.body get `title`, `image`, `content` & `price` which is ideally some text
   * zod validate
   * save the course to the database
   * handle course title already present error, mongoose should by itself check that
   * return the new course id to the user
   */
  return res.send("create a new course");
});

// update a course
router.post("/course", (req, res) => {
  /* constraint: is a protected route, needs to be admin
   * req.body get `title`, `image`, `content` & `price` which is ideally some text
   * zod validate to include course name and image or content or price or both
   * update the course in the database
   * think if the course is not present return valid error message
   * return the updated course id to the user
   */
  return res.send("update a given course");
});

// get all the courses created by the user
router.get("/course/list", (req, res) => {
  /* constraint: is a protected route, needs to be admin
   * fetch all the courses of the user from the database
   * return the courses back to the user
   */
  return res.send("here are all the courses you created");
});

export default router;
