import { NextFunction, Request, response, Response } from "express";
import { cpf as cpfValidator } from "cpf-cnpj-validator";

export class ValidatorCpfMiddlaware {
  validateCpf(request: Request, Response: Response, next: NextFunction) {
    const { cpf } = request.body;

    if (!cpfValidator.isValid(cpf)) {
      return response.status(404).json({ error: "CPF inválido!" });
    }
    return next();
  }
}
