import { Request, Response } from "express";
import { UserDb } from "../db/users";
import { Transactions } from "../customs/transactions";

export class UpdateUsersController {
  update(request: Request, response: Response) {
    const { id } = request.params;

    const { transaction } = request.body;
    const users = UserDb.find((users) => users.id === id);
    if (!users) {
      return response.status(404).json({ error: "Usuário não encontrado!" });
    }
    try {
      users.updateInformation(name, transaction);
    } catch (err: any) {
      return response.status(400).json({ error: err.message });
    }
    return response.json(Transactions);
  }
}
