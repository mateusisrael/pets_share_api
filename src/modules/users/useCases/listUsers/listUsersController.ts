import { Request, Response } from "express";
import { IListUserUseeCase } from "./listUsersUseCase";


export class ListUsersController {
  useCase: IListUserUseeCase;
  
  constructor(useCase: IListUserUseeCase) {
    this.useCase = useCase
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const users = this.useCase.execute()
      return res.status(200).json(users)
    } catch (error) {
      throw new Error()
    }
  }
}