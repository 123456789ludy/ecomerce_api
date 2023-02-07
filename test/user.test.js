const request = require("supertest");
const app = require("../app");

describe("Usuarios", () => {
  it("Debe devolver todos los usuarios en un arreglo", async (done) => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("data");
    expect(Array.isArray(res.body.data)).toBe(true);
    done();
  });

  it("Debe agregar un nuevo usuario", async (done) => {
    const res = await request(app)
      .post("/users")
      .send({
        name: "Juan",
        email: "juan@gmail.com",
        password: "1234",
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toHaveProperty("id");
    expect(res.body.data).toHaveProperty("name", "Juan");
    expect(res.body.data).toHaveProperty("email", "juan@gmail.com");
    done();
  });
});