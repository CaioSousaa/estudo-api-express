import { Request, Response } from "express";
import { ListAccountsService } from "../services/listAccountsService";

class ListAccountsController {
  async handle(request: Request, response: Response) {
    try {
      const listAccountsService = new ListAccountsService();

      const listAccounts = await listAccountsService.execute();

      return response.status(200).send(listAccounts);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { ListAccountsController };
