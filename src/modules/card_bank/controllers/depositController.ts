import { Request, Response } from "express";
import { DepositService } from "../services/depositService";

class DepositController {
  async handle(request: Request, response: Response) {
    const { value, password } = request.body;
    const { userId } = request.params;

    try {
      const depositService = new DepositService();

      const deposit = await depositService.execute({
        value,
        userId,
        password,
      });

      return response.status(200).send(deposit);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { DepositController };
