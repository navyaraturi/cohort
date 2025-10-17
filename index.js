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

app.post("/signup", (req, res) => {});
app.post("/signin", (req, res) => {});
app.post("/purchase-course", (req, res) => {});
app.get("/courses", (req, res) => {});
app.get("/purchased-courses", (req, res) => {});

app.listen(Bun.env.PORT, () => {
  console.log(`Server listening on ${Bun.env.PORT}`);
});
