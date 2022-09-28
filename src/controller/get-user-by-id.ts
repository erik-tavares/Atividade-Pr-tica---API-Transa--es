import { Request, Response } from "express";
import { UserDb } from "../db/users";

export class GetUsersByIdController {
  getById(request: Request, response: Response) {
    const { id } = request.params;
    // console.log(id);
    const user = UserDb.find((user) => user.id === id);
    if (!user) {
      return response.status(404).json({ erro: "Usuário não encontrado!" });
    }
    return response.json(user.toJson());
  }
}
