import { Request, response, Response } from "express";
import { UserDb } from "../db/users";

export class GetTransactionUserController {
  getTransaction(request: Request, response: Response) {
    const { userId, id } = request.params;
    if (!userId || id) {
      return response
        .status(404)
        .json({ Error: "Usuário ou Transação não encontrado!" });
    }
    const transaction = UserDb.find(
      (user) => user.id === userId
    )?.transactions.find((item) => item.id === id);
    if (!transaction) {
      return response.status(404).json({ Error: "Transação não encontrada!" });
    }
    return response.status(200).json(transaction);
  }
}
