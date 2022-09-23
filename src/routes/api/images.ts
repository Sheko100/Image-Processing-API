import express from "express";
import resizeImage from "../../utilities/resizeImage";
import sharp from "sharp";
import path from "path";

const route = express.Router();

route.get(
  "/",
  async (req: express.Request, res: express.Response): Promise<void> => {
    const imageName = req.query.file_name as string;
    let width = req.query.width as unknown as number;
    let height = req.query.height as unknown as number;
    const isWidthWrong = isNaN(width) || width <= 0;
    const isHeightWrong = isNaN(height) || height <= 0;
    const outputImage = `./assets/thumb/${imageName}_${width}_${height}.jpg`;
    const imagePath = path.resolve(outputImage);
    let errMessage =
      "Error: there is an error during image processing. Please, refresh the page to try again";

    if (isWidthWrong || isHeightWrong) {
      res.send("Please, assign only positive numbers to width and height");
    } else {
      width = parseInt(req.query.width as string);
      height = parseInt(req.query.width as string);

      try {
        const metadata = await sharp(outputImage).metadata();
        if (metadata) {
          if (metadata.width == width && metadata.height == height) {
            res.sendFile(imagePath);
          }
        }
      } catch (err) {
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
      }
    }
  }
);

export default route;
