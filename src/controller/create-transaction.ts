import { Request, Response } from "express";
import { Transactions } from "../customs/transactions";

export class CreateTransactionController {
  createTransaction(request: Request, response: Response) {
    const { title, value, type } = request.body;
    const { id } = request.params;
    const usersTransactions = new Transactions(title, value, type);
    if (!usersTransactions) {
      return response.status(404).json({ Error: "Usuário não encontrado!" });
    }

    const transactions = new Transactions(title, value, type);
    return response.json(transactions.toJson());
  }
}
