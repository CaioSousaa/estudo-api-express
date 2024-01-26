import { Request, Response } from "express";
import { ListUserByIdService } from "../services/listUserByIdService";

class ListUserByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    try {
      const listUserByIdService = new ListUserByIdService();

      const user = await listUserByIdService.execute({ id });

      return response.status(200).send(user);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { ListUserByIdController };
