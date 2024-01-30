import { Request, Response } from "express";
import { DeleteAccountService } from "../services/deleteAccountService";

class DeleteAccountController {
  async handle(request: Request, response: Response) {
    const { id } = request.query as { id: string };
    try {
      const deleteAccountService = new DeleteAccountService();

      const deleteUser = await deleteAccountService.execute({ id });

      return response.status(200).send(deleteUser);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { DeleteAccountController };
