import { Router } from "express";
import { CreateCardBankController } from "../modules/card_bank/controllers/createCardBankController";
import { ListCardBankController } from "../modules/card_bank/controllers/listCardBankController";

const cardBankRoutes = Router();

cardBankRoutes.post("/", (request, response) => {
  return new CreateCardBankController().handle(request, response);
});

cardBankRoutes.get("/", (request, response) => {
  return new ListCardBankController().handle(request, response);
});

export { cardBankRoutes };
