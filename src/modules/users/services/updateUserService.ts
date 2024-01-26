import prismaClient from "../../../prisma";
import { IUpdateUserDTO } from "../dto/IUpdateUserDTO";

class UpdateUserService {
  async execute({ id, nameUser }: IUpdateUserDTO) {
    const userExist = await prismaClient.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!userExist) {
      throw new Error("user do not exist!!!");
    }

    const validationNameUser = await prismaClient.user.findFirst({
      where: {
        nameUser: nameUser,
      },
    });

    if (validationNameUser) {
      throw new Error("nameUser alredy exist");
    }

    const user = await prismaClient.user.update({
      where: {
        id: userExist.id,
      },
      data: {
        nameUser: nameUser,
      },
    });

    return user;
  }
}

export { UpdateUserService };
