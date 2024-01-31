import { Request, Response } from "express";
import { CreateCardBankService } from "../services/createCardBankService";

class CreateCardBankController {
  async handle(request: Request, response: Response) {
    const { userId, password } = request.body;

    try {
      const createCardBankService = new CreateCardBankService();

      const createCardBank = await createCardBankService.execute({
        userId,
        password,
      });

      return response.status(200).send(createCardBank);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { CreateCardBankController };
