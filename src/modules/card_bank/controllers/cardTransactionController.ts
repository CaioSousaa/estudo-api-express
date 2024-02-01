import { Request, Response } from "express";
import { CardTransactionService } from "../services/cardTransactionService";

class CardTransactionController {
  async handle(request: Request, response: Response) {
    const { id_accountOne, id_accountTwo } = request.body;
    const { password, transfer_key, value_transfer } = request.body;

    try {
      const cardTransactionService = new CardTransactionService();

      const cardTransaction = await cardTransactionService.execute({
        id_accountOne,
        id_accountTwo,
        transfer_key,
        password,
        value_transfer,
      });

      return response.status(200).send(cardTransaction);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { CardTransactionController };
