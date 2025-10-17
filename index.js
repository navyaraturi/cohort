import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  return res.send("Cohort app");
});

app.listen(Bun.env.PORT, () => {
  console.log(`Server listening on ${Bun.env.PORT}`);
});
