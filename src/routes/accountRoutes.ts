import { Router } from "express";
import { CreateAccountController } from "../modules/accounts/controllers/createAccountController";
import { ListAccountsController } from "../modules/accounts/controllers/listAccountsController";

const accountRoutes = Router();

accountRoutes.post("/", (request, response) => {
  return new CreateAccountController().handle(request, response);
});

accountRoutes.get("/", (request, response) => {
  return new ListAccountsController().handle(request, response);
});

export { accountRoutes };
