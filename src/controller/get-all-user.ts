import { Request, Response } from "express";
import { UserDb } from "../db/users";

export class GetAllUserConrtroller {
  getAll(request: Request, response: Response) {
    const users = UserDb.map((user) => {
      return user.toJson();
    });

    return response.json(users);
  }
}
