import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { adminRouter, courseRouter, userRouter } from "./routes";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  return res.send("Cohort api service is active");
});

// Router
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
  try {
    await mongoose.connect(Bun.env.MONGODB_CONNECTION_STRING);
    app.listen(Bun.env.PORT, () => {
      console.log(`Server listening on ${Bun.env.PORT}`);
    });
  } catch (err) {
    console.log(
      "Server failed to start most probably a database connection error."
    );
    console.log(err);
  }
}

main();
