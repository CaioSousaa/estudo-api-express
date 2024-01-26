import { Request, Response } from "express";
import { UpdateUserService } from "../services/updateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id, nameUser } = request.body;

    try {
      const updateUserService = new UpdateUserService();

      const user = await updateUserService.execute({ id, nameUser });

      return response.status(200).send(user);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { UpdateUserController };
