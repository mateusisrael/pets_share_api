import { AppError } from "../../../../errors"
import { IUserDTO } from "../../repositories/implementations/IUserDTO"
import { IUserRepository } from "../../repositories/implementations/IUserRepository"

class CreateUserUseCase {
  userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  checkIfUserExists(username: string) {
    return this.userRepository.findByUsername(username)
  }

  execute(user: IUserDTO) {
    const userAlreadyExists = this.checkIfUserExists(user.username)
    if(userAlreadyExists) throw new AppError('User Already Exists', 400)
    this.userRepository.create(user)
  }
}

export { CreateUserUseCase }