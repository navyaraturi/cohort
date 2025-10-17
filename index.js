import express from "express";
import cors from "cors";
import { adminRouter, courseRouter, userRouter } from "./routes";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  return res.send("Cohort api service active");
});

// Router
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

app.listen(Bun.env.PORT, () => {
  console.log(`Server listening on ${Bun.env.PORT}`);
});
