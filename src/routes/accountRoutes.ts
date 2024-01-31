import { Router } from "express";
import { CreateAccountController } from "../modules/accounts/controllers/createAccountController";
import { ListAccountsController } from "../modules/accounts/controllers/listAccountsController";
import { DeleteAccountController } from "../modules/accounts/controllers/deleteAccountController";
import { CheckAccountBalanceController } from "../modules/accounts/controllers/checkAccountBalanceController";
import { TransactionController } from "../modules/accounts/controllers/transactionController";

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

accountRoutes.delete("/", (request, response) => {
  return new DeleteAccountController().handle(request, response);
});

accountRoutes.patch("/", (request, response) => {
  return new TransactionController().handle(request, response);
});
export { accountRoutes };
