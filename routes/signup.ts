import { NextFunction, Request, Response, Router } from "express"
import { users as usersDB } from '../database'
import { AppError } from "../errors"
import { v4 as uuidV4 } from 'uuid'
import { hash } from 'bcrypt'


const signupRoute = Router()

interface IUserData {
  username: string
  name: string,
  password: string
}

const checkUserInfos = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, name, password }: IUserData = req.body
    console.log(typeof name, typeof password)
    if(!name || !password || !username) throw new Error()
    next()
  } catch (error) {
    console.log('deu ruim')
    throw new AppError('User or name values invalid', 400)
  }
}

const checkIfUserAlreadyExists = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.body
    const userAlreadyExists = usersDB.find(user => username === user.username)
    if(userAlreadyExists) throw new Error()
    next()
  } catch (error) {
    throw new AppError('UserName unavailable')
  }
}

signupRoute.post('/', checkUserInfos, checkIfUserAlreadyExists, async (req: Request, res: Response) => {
  const secret = process.env.SECRET

  try {
    const { name, password, username } = req.body

    const passwordHash = await hash(password, 8)
    console.log(passwordHash)
    const user = {
      id: uuidV4(),
      username,
      name,
      password: passwordHash
    }
    usersDB.push(user)

    return res.status(201).send()
  } catch (error) {
    throw new Error()
  }
})

export { signupRoute }