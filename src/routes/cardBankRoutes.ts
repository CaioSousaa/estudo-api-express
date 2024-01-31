import { Router } from "express";
import { CreateCardBankController } from "../modules/card_bank/controllers/createCardBankController";

const cardBankRoutes = Router();

cardBankRoutes.post("/", (request, response) => {
  return new CreateCardBankController().handle(request, response);
});

export { cardBankRoutes };
