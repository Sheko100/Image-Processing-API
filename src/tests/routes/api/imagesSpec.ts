import resizeImage from "../../../utilities/resizeImage";

describe("Image resizing should resolve or reject", (): void => {
  it("Expects resizing to not throw error", async (): Promise<void> => {
    await expectAsync(
      resizeImage("santamonica", 48, 48, "./assets/thumb/santamonica.jpg")
    ).toBeResolved();
  });

  it("Expects resizing to throw error", async (): Promise<void> => {
    await expectAsync(
      resizeImage("santamonicas", 48, 48, "./assets/thumb/santamonicas.jpg")
    ).toBeRejectedWithError();
  });
});
