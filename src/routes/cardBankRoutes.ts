import { Router } from "express";
import { CreateCardBankController } from "../modules/card_bank/controllers/createCardBankController";
import { ListCardBankController } from "../modules/card_bank/controllers/listCardBankController";
import { CardTransactionController } from "../modules/card_bank/controllers/cardTransactionController";

const cardBankRoutes = Router();

cardBankRoutes.post("/", (request, response) => {
  return new CreateCardBankController().handle(request, response);
});

cardBankRoutes.get("/", (request, response) => {
  return new ListCardBankController().handle(request, response);
});

cardBankRoutes.patch("/", (request, response) => {
  return new CardTransactionController().handle(request, response);
});

export { cardBankRoutes };
