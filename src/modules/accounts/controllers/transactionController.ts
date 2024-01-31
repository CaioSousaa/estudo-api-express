import { Request, Response } from "express";
import { TransactionService } from "../services/transactionService";

class TransactionController {
  async handle(request: Request, response: Response) {
    const { id_accountOne, id_accountTwo } = request.body;
    const { password, transfer_key, value_transfer } = request.body;

    try {
      const transactionService = new TransactionService();

      const accountTransaction = await transactionService.execute({
        id_accountOne,
        id_accountTwo,
        transfer_key,
        password,
        value_transfer,
      });

      return response.status(200).send(accountTransaction);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { TransactionController };
