import express from "express";
import cors from "cors";
import { userRouter, courseRouter } from "./routes";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// Router
app.use("/user", userRouter);
app.use("/course", courseRouter);

app.get("/", (req, res) => {
  return res.send("Cohort app");
});

app.listen(Bun.env.PORT, () => {
  console.log(`Server listening on ${Bun.env.PORT}`);
});
