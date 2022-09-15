import app from "../index";
import supertest from "supertest";

const request = supertest(app);

describe("testing the endpoint", () => {
  it("gets the api ednpoint", async () =>{
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  })
});