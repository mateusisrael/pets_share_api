import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { v4 as uuidV4} from 'uuid'
import { hash } from "bcrypt";

class CreateUserController {
  useCase: CreateUserUseCase

  constructor(useCase: CreateUserUseCase) {
    this.useCase = useCase
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const passwdHash = await hash(req.body.password, 8)

      const user = {
        id: uuidV4(),
        name: req.body.name,
        username: req.body.username,
        password: passwdHash,
        pets: []
      }
      this.useCase.execute(user)
      return res.status(200).json({ 'message': "User Created!"})
    } catch (error) {
      throw error
    }
  }
}

export { CreateUserController }