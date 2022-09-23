import { Response, Request } from "express";
import { User } from "../customs/User";
import { UserDb } from "../db/users";

export class CreateUsersController {
  create(request: Request, response: Response) {
    const { name, age, cpf, email } = request.body;
    const users = new User(name, age, cpf, email);
    UserDb.push(users);
    return response.json(users.toJson());
  }
}
