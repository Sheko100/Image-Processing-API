import app from "../index";
import supertest from "supertest";

const request = supertest(app);

describe("testing the endpoint", (): void => {
  it("gets the api ednpoint", async (): Promise<void> => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
});
