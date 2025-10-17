import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  return res.send("Cohort app");
});

app.post("/user/signup", (req, res) => {});
app.post("/user/signin", (req, res) => {});

// list all purchased courses
app.get("/user/purchases", (req, res) => {});

// to purchase a new course
app.post("/course/purchase", (req, res) => {});

// list of all available courses
app.get("/courses", (req, res) => {});

app.listen(Bun.env.PORT, () => {
  console.log(`Server listening on ${Bun.env.PORT}`);
});
