import { Request, Response } from "express";
import { UserDb } from "../db/users";

export class RemoveUsersController {
  delete(request: Request, response: Response) {
    const { id } = request.params;
    console.log(id);

    const indexUser = UserDb.findIndex((users) => users.id === id);

    if (indexUser < 0) {
      return response.status(404).json({ error: "Usuário não encontrado" });
    }

    UserDb.splice(indexUser, 1);

    return response
      .status(200)
      .json({ message: "Usuário deletado com sucesso!" });
  }
}
