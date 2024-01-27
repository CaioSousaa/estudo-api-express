import { Router } from "express";
import { CreateAccountController } from "../modules/accounts/controllers/createAccountController";

const accountRoutes = Router();

accountRoutes.post("/", (request, response) => {
  return new CreateAccountController().handle(request, response);
});

export { accountRoutes };
