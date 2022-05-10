import { Request, Response } from "express"
import { AppError } from "../errors"

interface IAuthenticateMiddleware {
  req?: Request,
  res?: Response,
  next? (): void  
}

const authenticateMiddleare = ({
  req,
  res,
  next
}: IAuthenticateMiddleware) => {

  try {
    console.log('User Authenticated')
    next()
  } catch (error) {
    throw new AppError('User is not authenticated', 401)
  }


}

export { authenticateMiddleare }