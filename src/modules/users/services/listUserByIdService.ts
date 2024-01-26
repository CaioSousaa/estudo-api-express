import prismaClient from "../../../prisma";
import { IListUserById } from "../dto/listUserByIdDTO";

class ListUserByIdService {
  async execute({ id }: IListUserById) {
    const user = await prismaClient.user.findMany({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error("User do not exists!!!");
    }

    return user;
  }
}

export { ListUserByIdService };
