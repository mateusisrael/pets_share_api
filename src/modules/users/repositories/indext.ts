import { users } from "../../../database";
import { IUserDTO } from "./implementations/IUserDTO";
import { IUserRepository } from "./implementations/IUserRepository";

export class UserRepository implements IUserRepository{
  create(user: IUserDTO): void {
    throw new Error("Method not implemented.");
  }
  list(): IUserDTO[] {
    return users
  }
  findByName(username: string): void | IUserDTO {
    throw new Error("Method not implemented.");
  }
}