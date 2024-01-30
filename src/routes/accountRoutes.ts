import { Router } from "express";

import { CreateAccountController } from "../modules/accounts/controllers/createAccountController";
import { ListAccountsController } from "../modules/accounts/controllers/listAccountsController";
import { CheckAccountBalanceController } from "../modules/accounts/controllers/checkAccountBalanceController";

const accountRoutes = Router();

accountRoutes.post("/", (request, response) => {
  return new CreateAccountController().handle(request, response);
});

accountRoutes.get("/", (request, response) => {
  return new ListAccountsController().handle(request, response);
});

accountRoutes.get("/:userId/balance", (request, response) => {
  return new CheckAccountBalanceController().handle(request, response);
});

export { accountRoutes };
