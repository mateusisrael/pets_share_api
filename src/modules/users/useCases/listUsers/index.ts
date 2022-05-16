import { ListUserUseCase } from "./listUsersUseCase";
import { ListUsersController } from "./listUsersController";
import { UserRepository } from "../../repositories/indext";

export const listUsersController = (): ListUsersController => {
  const repository = new UserRepository()
  const useCase = new ListUserUseCase(repository)
  const controller = new ListUsersController(useCase)

  return controller
}