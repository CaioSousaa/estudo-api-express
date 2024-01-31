import { Request, Response } from "express";
import { ListCardBankService } from "../services/listCardBankService";

class ListCardBankController {
  async handle(request: Request, response: Response) {
    try {
      const listCardBankService = new ListCardBankService();

      const listCards = await listCardBankService.execute();

      return response.status(200).send(listCards);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { ListCardBankController };
