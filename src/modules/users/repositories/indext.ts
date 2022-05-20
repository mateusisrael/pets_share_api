import { users } from "../../../database";
import { IUserDTO } from "./implementations/IUserDTO";
import { IUserRepository } from "./implementations/IUserRepository";

export class UserRepository implements IUserRepository{
  create(user: IUserDTO): void {
    users.push(user)
  }
  list(): IUserDTO[] {
    return users
  }
  findByUsername(username: string): void | IUserDTO {
    return users.find(( user ) => username === user.username)
  }
}