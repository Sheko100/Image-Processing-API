import express from "express";
import resizeImage from "../../utilities/resizeImage";
import path from "path";
// TODO: run the lint then commit the code
const route = express.Router();

route.get("/", async (req, res) => {
  const imageName = req.query.file_name as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);
  const outputImage = `src/assets/thumb/${imageName}.jpg`;
  const imagePath = path.resolve(outputImage);
  let errMessage =
    "Error: there is an error during image processing. Please, refresh the page to try again";

  try {
    await resizeImage(imageName, width, height, outputImage);
    res.sendFile(imagePath);
  } catch (err) {
    if (err instanceof Error) {
      errMessage = err.message;
    }
    console.error(err);
    res.send(errMessage);
  }
});

export default route;
