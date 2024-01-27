import { Request, Response } from "express";
import { CreateAccountDTO } from "../dto/CreateAccountDTO";
import { CreateAccountService } from "../services/createAccountService";

class CreateAccountController {
  async handle(request: Request, response: Response) {
    const { type_account, transfer_key, password, description, userId } =
      request.body;

    try {
      const createAccountDTO = new CreateAccountDTO();
      const createAccountService = new CreateAccountService();

      const createAccount = await createAccountService.execute(
        {
          type_account,
          transfer_key,
          password,
          description,
          userId,
        },
        createAccountDTO
      );

      return response.status(201).send(createAccount);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { CreateAccountController };
