import { Request, Response, NextFunction } from "express";
import { UserDb } from "../db/users";
import "../utils/extension-methods";

export class VerifyCpfExistsMiddleware {
  verifyCpfExists(request: Request, response: Response, next: NextFunction) {
    const { cpf } = request.body;

    if (
      UserDb.some(
        (user) => user.cpf === (cpf as string).clearSpecialCharacteres()
      )
    ) {
      return response.status(400).json({ error: "CPF já cadastrado!" });
    }

    return next();
  }
}
