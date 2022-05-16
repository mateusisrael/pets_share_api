import { IUserDTO } from "../../repositories/implementations/IUserDTO";
import { IUserRepository } from "../../repositories/implementations/IUserRepository";

export interface IListUserUseeCase {
  execute(): IUserDTO[] 
}

export class ListUserUseCase {
  repository: IUserRepository
  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  execute() {
    return this.repository.list()
  }
}