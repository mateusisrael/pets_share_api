import { Router, Request, Response } from "express"
import { users } from "../database"
import { AppError } from "../errors"
import { listUsersController } from "../modules/users/useCases/listUsers/"
import "express-async-errors"

const userRoute = Router()

userRoute.get('/:id?', async (req: Request, res: Response) => {
  // try{
  //   const userId = req.params?.id
  //   if(userId) {
  //     console.log(userId)
  //     const user = users.find((user) => user.id === userId)
  //     if(user) return res.status(200).json({
  //       id: user.id,
  //       name: user.name,
  //       pets: user?.pets?.length > 0 ? user?.pets : []
  //     })

  //     throw new AppError('User not found', 400)
  //   }

  //   // const findUsers = users.map((user) => {
  //   //   return {
  //   //     id: user.id,
  //   //     name: user.name,
  //   //     pets: user?.pets?.length > 0 ? user.pets : []
  //   //   }
  //   // })
  //   // return res.status(200).json(findUsers)
    
  
  // } catch(error) {
  //   throw error
  // }
  await listUsersController().handle(req, res)


})

export { userRoute }
