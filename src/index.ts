import express from "express";
import request from "supertest";

const app = express();
const port = 3000;

app.get("/api", (req, res) => {
  res.send("api endpoint");
});


app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;