import { Response, Request, NextFunction } from "express";
import { User } from "../customs/User";
import { UserDb } from "../db/users";

export class CreateUsersController {
  create(request: Request, response: Response) {
    const { name, email, age, cpf, transactions } = request.body;

    const users = new User(name, email, age, cpf, transactions);
    UserDb.push(users);
    return response.json(users.toJson());
  }
}
