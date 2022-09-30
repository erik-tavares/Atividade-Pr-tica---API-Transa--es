import { Express } from "express";
import { CreateTransactionController } from "./controller/create-transaction";
import { CreateUsersController } from "./controller/create-users";
import { RemoveUsersController } from "./controller/delete-users";
import { GetAllUserConrtroller } from "./controller/get-all-user";
import { GetTransactionUserController } from "./controller/get-transaction";
import { GetUsersByIdController } from "./controller/get-user-by-id";
import { VerifyCpfExistsMiddleware } from "./middlewares/verify-cpf-exist";
import { ValidatorCpfMiddlaware } from "./middlewares/verify-cpf-user";
import { createUserMiddlaware } from "./middlewares/verifyUsers";

export default (app: Express) => {
  app.post(
    "/userscreate",
    new ValidatorCpfMiddlaware().validateCpf,
    new VerifyCpfExistsMiddleware().verifyCpfExists,
    createUserMiddlaware,
    new CreateUsersController().create
  );
  app.get("/", (request, response) => response.send("Funfou aeeeeeeee"));
  app.get("/user/:id", new GetUsersByIdController().getById);
  app.get("/user", new GetAllUserConrtroller().getAll);
  app.delete("/delete/users/:id", new RemoveUsersController().delete);
  app.post(
    "/user/:id/transactions",
    new CreateTransactionController().createTransaction
  );
  app.get(
    "/user/:userId/transactions/:id",
    new GetTransactionUserController().getTransaction
  );
};
