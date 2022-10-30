import { app } from '../index';
import request from "supertest";

describe("[POSt]/signup", () => {
  it("Shoud be able to create a new user", async () => {
    const signupResponse = await request(app)
      .post("/api/signup")
      .send({
        name: "Mateus",
        username: "Pomphee",
        password: "senhaforte123"
      })
      .expect(201)
  })

  it(
    "Should not be able to create a new user if username is null",
    async () => {
    const signupResponse = await request(app)
      .post("/api/signup")
      .send({
        name: "Mateus",
        password: "mypass"
      })
      .expect(400)

      expect(signupResponse.body.message).toBeTruthy()
  })

  it(
    "Should not be able to create a new user if name is null",
    async () => {
      const signupResponse = await request(app)
        .post("/api/signup")
        .send({
          username: "Mateus",
          password: "123!123"
        })
        .expect(400)

        expect(signupResponse.body.message).toBeTruthy()
    }
  )

  it(
    "Should not be able to create a new user if password is null",
    async () => {
      const signupResponse = await request(app)
        .post("/api/signup")
        .send({
          "name": "Mateus",
          "username": "Pomphee"
        })
        .expect(400)

        expect(signupResponse.body.message).toBeTruthy()
    }
  )

  it(
    "Should not be able to create a new user if username already exists",
    async () => {
      const user = {
        name: "Luiz",
        username: "zeus",
        password: "secret123"
      }
      await request(app)
      .post("/api/signup")
      .send(user)
      .expect(201)

      const signupResponse = await request(app)
      .post("/api/signup")
      .send(user)
      .expect(400)

      expect(signupResponse.body.message).toBeTruthy()
    })
})

// describe("[POST]/signin", () => {
//   it("Should be able signin!")
// })