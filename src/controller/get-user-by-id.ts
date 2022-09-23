import { Request, Response } from "express";
import { UserDb } from "../db/users";

export class GetUsersByIdController {
  getById(request: Request, response: Response) {
    const { id } = request.params;
    const user = UserDb.find((user) => user.id === id);
    if (!user) {
      return response.status(404).json({ erro: "User not found!" });
    }
    return response.json(user.toJson());
  }
}
