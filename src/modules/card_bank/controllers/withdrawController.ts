import { Request, Response } from "express";
import { WithdrawService } from "../services/withdrawService";

class WithdrawController {
  async handle(request: Request, response: Response) {
    const { value, password } = request.body;
    const { userId } = request.params;

    try {
      const withdrawService = new WithdrawService();

      const withdraw = await withdrawService.execute({
        value,
        userId,
        password,
      });

      return response.status(200).send(withdraw);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { WithdrawController };
