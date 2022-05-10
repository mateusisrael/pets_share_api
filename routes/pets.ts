import { Request, Response, Router } from 'express'
import { pets } from '../database'

const petsRouter = Router()

petsRouter.get('/', (
  req: Request,
  res: Response,
) => {

  try {
    const findPets = pets.map((pet) => ({
      "id": pet.id,
      "name": pet.name
    }))
    return res.status(200).json(findPets)
  } catch (error) {
    throw new Error()
  }
})

export { petsRouter }