import express from "express";
import route from "./api/images";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("API endpoint");
});

routes.use("/images", route);

export default routes;