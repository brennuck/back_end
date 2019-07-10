const request = require("supertest");

const server = require("./server");

describe("server.js", () => {
  it("should set testing environment", async () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("GET /", () => {
  it("should return 200 OK", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });

  it("should return json", async () => {
    const res = await request(server).get("/");
    expect(res.type).toBe("application/json");
  });

  it('should return message: "Its alive!"', async () => {
    const res = await request(server).get("/");
    expect(res.body).toEqual({ message: "It's alive!" });
  });
});
