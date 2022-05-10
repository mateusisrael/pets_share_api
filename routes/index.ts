import { Router } from "express"
import { userRoute } from './user'
import { petsRouter } from "./pets"
import { signupRoute } from "./signup"

const mainRouter = Router()

mainRouter.get('/', (req, res) => {
  return res.status(200).json({
    "message": "Hello Express Server from main router!"
  })
})

export { mainRouter, userRoute, petsRouter, signupRoute }