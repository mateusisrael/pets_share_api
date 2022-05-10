import { Router, Request, Response } from "express"
import { users } from "../database"

const userRoute = Router()

userRoute.get('/', (req: Request, res: Response) => {
  try{
    const findUsers = users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        pets: user.pets
      }
    })

    return res.status(200).json(findUsers)

  } catch(error) {
    return res.status(500).json({
      "message": "Server internal error"
    })
  }

})

export { userRoute }
