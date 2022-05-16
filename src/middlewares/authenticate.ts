import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken"
import { AppError } from "../errors"


const authenticateMiddleare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization

  if(!authHeader) throw new AppError('Token missing', 401)

  const [ , token] = authHeader.split(" ")

  try {
    verify(token, 'teste')
    next()
  } catch (error) {
    throw new AppError('Invalid token', 401)
  }


}

export { authenticateMiddleare }