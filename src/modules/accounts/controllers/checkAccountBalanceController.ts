import { Request, Response } from "express";
import { CheckAccountBalanceService } from "../services/checkAccountBalanceService";

class CheckAccountBalanceController {
  async handle(request: Request, response: Response) {
    const { password } = request.body;
    const { userId } = request.params;

    try {
      const checkAccountBalanceService = new CheckAccountBalanceService();

      const balance = await checkAccountBalanceService.execute({
        password,
        userId,
      });

      return response.status(200).send(balance.toString());
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { CheckAccountBalanceController };
