import resizeImage from "../../../utilities/resizeImage";

describe("Image resizing should resolve or reject",  () => {
it("Expects resizing to not throw error", async () => {
  await expectAsync(resizeImage("santamonica", 48, 48, "src/assets/thumb/santamonica.jpg")).toBeResolved();
});

it("Expects resizing to throw error", async () => {
  await expectAsync(resizeImage("santamonicas", 48, 48, "src/assets/thumb/santamonicas.jpg")).toBeRejectedWithError();
});

});