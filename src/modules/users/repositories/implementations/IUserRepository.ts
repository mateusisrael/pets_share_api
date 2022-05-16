import { IUserDTO } from "./IUserDTO";

export interface IUserRepository {
  create(user: IUserDTO): void,
  list(): IUserDTO[],
  findByName(username: string): IUserDTO | void
}