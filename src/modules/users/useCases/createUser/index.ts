import { UserRepository } from "../../repositories/indext"
import { CreateUserController } from "./CreateUserController"
import { CreateUserUseCase } from "./CreateUserUseCase"

const createUserController = () => {
  const repository = new UserRepository()
  const useCase = new CreateUserUseCase(repository)
  const controller = new CreateUserController(useCase)

  return controller
}

export { createUserController }