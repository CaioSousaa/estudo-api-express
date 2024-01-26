import { Request, Response } from "express";
import { ListUserService } from "../services/listUserService";

class ListUserController {
  async handle(request: Request, response: Response) {
    try {
      const listUserService = new ListUserService();

      const listUser = await listUserService.execute();

      return response.status(200).send(listUser);
    } catch (err) {
      console.log(err);
      return response.status(500).json({ message: "Internal server error!!!" });
    }
  }
}

export { ListUserController };
