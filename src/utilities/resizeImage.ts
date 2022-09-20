import sharp from "sharp";

const resizeImage = async (
  imageName: string,
  width: number,
  height: number,
  outputImage: string
): Promise<void> => {
  const inputImage = `src/assets/full/${imageName}.jpg`;

  await sharp(inputImage).resize(width, height).toFile(outputImage);
};

export default resizeImage;
