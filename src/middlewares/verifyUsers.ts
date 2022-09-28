import { Request, Response, NextFunction } from "express";

class verifyParamsMiddlware {
  static ValidarUser(request: Request, response: Response, next: NextFunction) {
    const { name, email, age, cpf } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Insira um nome válido!" });
    }

    if (!cpf) {
      return response.status(400).json({ error: "Insira um CPF válido!" });
    }

    if (!email) {
      return response.status(400).json({ error: "Insira um Email válido!" });
    }

    if (!age) {
      return response.status(400).json({ error: "Insira uma Idade válida!" });
    }
    next();
  }

  static verifySize(request: Request, response: Response, next: NextFunction) {
    const nome = request.body.name as string;
    if (nome.length < 3) {
      return response.status(401).json({ error: "Tamanho de nome inválido!" });
    }
    next();
  }
}

export const createUserMiddlaware = [
  //
  verifyParamsMiddlware.ValidarUser,
  verifyParamsMiddlware.verifySize,
];
