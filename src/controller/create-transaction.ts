import { Request, Response } from "express";
import { Transactions } from "../customs/transactions";
import { UserDb } from "../db/users";

export class CreateTransactionController {
  createTransaction(request: Request, response: Response) {
    const { title, value, type } = request.body;
    const { id } = request.params;
    if (!id) {
      return response.status(404).json({ error: "Id não Informado!" });
    }
    const transaction = new Transactions(title, value, type);
    const user = UserDb.find((user) => user.id === id);
    if (!user) {
      return response.status(404).json({ Error: "Usuário não encontrado!" });
    }
    const userIndex = UserDb.findIndex((user) => user.id === id);
    UserDb[userIndex].transactions.push(transaction);
    return response.status(201).json(transaction);
    // .json({ Message: "Transação criada com sucesso!" });
  }
}
