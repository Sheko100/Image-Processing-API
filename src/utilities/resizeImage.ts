import sharp from "sharp";

/**
 * @description resizing an image to a new image in a new path
 * @param imageName - the processing image name
 * @param width - the desired resizing width 
 * @param height - the desired resizing height
 * @param outputImage - the resizied image path
 */

const resizeImage = async (
  imageName: string,
  width: number,
  height: number,
  outputImage: string
): Promise<void> => {
  const inputImage = `./assets/full/${imageName}.jpg`;

  await sharp(inputImage).resize(width, height).toFile(outputImage);
};

export default resizeImage;
