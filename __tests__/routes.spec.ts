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

describe("[POST]/signin", () => {
  // não deve ser possível logar com um usuário inexistente
  // não deve ser possível logar com uma senha incorreta

  it(
    "Should not be able to signin if user passed does not exists",
    async () => {
      const signinResponse = await request(app)
      .post("/api/signin")
      .send({
        username: "Xussa",
        password: "ftftft"
      })
      .expect(400)
      expect(signinResponse.body.message).toBeTruthy()
    }
  )

  it(
    "Should not be able to signin with incorrect password",
    async () => {
      await request(app)
      .post("/api/signup")
      .send({
        name: "Francisco",
        username: "Xicoz",
        password: "fsfsfs"
      })

      const signinResponse = await request(app)
      .post("/api/signin")
      .send({
        username: "Xicoz",
        password: "123123"
      })
      .expect(400)
      expect(signinResponse.body.message).toBeTruthy()
    }
  )

  it(
    "Should be able to signin!",
    async () => {
      const signupResponse = await request(app)
      .post("/api/signup")
      .send({
        name: "Mateus",
        username: "zircon",
        password: "senhaforte123"
      })
      .expect(201)

      const signinResponse = await request(app)
      .post("/api/signin")
      .send({
        username: "zircon",
        password: "senhaforte123"
      })
      .expect(200)
    }  
  )
})