import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"


const authenticateMiddleare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {
    console.log('User Authenticated')
    next()
  } catch (error) {
    throw new AppError('User is not authenticated', 401)
  }


}

export { authenticateMiddleare }