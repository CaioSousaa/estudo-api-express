import { Request, Response } from "express";
import { CreateUserService } from "../services/createUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, nameUser, email, gender } = request.body;
    try {
      const createUserService = new CreateUserService();

      const user = await createUserService.execute({
        name,
        nameUser,
        email,
        gender,
      });

      return response.status(201).send(user);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { CreateUserController };
