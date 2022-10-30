import { compareSync } from 'bcrypt'
import { NextFunction, Request, Response, Router } from 'express'
import { sign } from 'jsonwebtoken'
import { users } from '../database'
import { AppError } from '../errors'

const signinRoute = Router()
// const secret = process.env.SECRET

const chekceIfUserExists = (req, res, next) => {
  try {
    const { username } = req.body
    const user = users.find((user) => {
      return user.username === username
    })
  
    if(user === undefined) throw new Error()
    next()
  } catch (error) {
    throw new AppError('Username incorrect', 400)
  }
}

const checkUserPassword = (req, res, next) => {
  try { 
    const { username, password } = req.body

    console.log("AQUI", username)

    const user = users.find((user) => {
      return user.username === username
    })

    const passwordMatch = compareSync(password, user.password)

    // console.log("MATCH", match)
    if(!passwordMatch) throw new Error()
    next()

  } catch (error) {
    throw new AppError('Incorrect password', 400)
  }
}

signinRoute.post('/', chekceIfUserExists, checkUserPassword, ( req: Request, res: Response ) => {
  const { username } = req.body
  const token = sign({}, 'teste', {
    subject: username
  })

  return res.status(200).json({
    "user": {
      username
    },
    "token": token
  })

})

export { signinRoute }