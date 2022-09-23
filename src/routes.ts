import { Express } from "express";
import { CreateUsersController } from "./controller/create-users";
import { GetAllUserConrtroller } from "./controller/get-all-user";

export default (app: Express) => {
  app.get("/", (request, response) => response.send("Funfou aeeeeeeee"));
  app.get("/user", new GetAllUserConrtroller().getAll);
  app.post("/addusers", new CreateUsersController().create);
};
