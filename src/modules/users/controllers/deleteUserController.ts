import { Request, Response } from "express";
import { DeleteUserService } from "../services/deleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.query as { id: string };
    try {
      const deleteUserService = new DeleteUserService();

      const deleteUser = await deleteUserService.execute({ id });

      return response.status(200).send(deleteUser);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { DeleteUserController };
