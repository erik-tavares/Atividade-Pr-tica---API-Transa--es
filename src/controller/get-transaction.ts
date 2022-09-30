import { Request, response, Response } from "express";
import { UserDb } from "../db/users";

export class GetTransactionUserController {
  getTransaction(request: Request, response: Response) {
    const { userId, id } = request.params;
    const transaction = UserDb.find(
      (user) => user.id === userId
    )?.transactions.find((item) => item.id === id);
    console.log(transaction);
    return response.status(200).json(transaction);
  }
}
