import prismaClient from "../../../prisma";
import { ICreateUserDTO } from "../dto/CreateUserDTO";

class CreateUserService {
  async execute({ name, nameUser, email, gender }: ICreateUserDTO) {
    if (!name || !nameUser || !email || !gender) {
      throw new Error("Fill in the fields to proceed!!!");
    }

    const emailAlreadyRegistred = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (emailAlreadyRegistred) {
      throw new Error("Email already registered!!!");
    }

    const nameUserAlreadyExist = await prismaClient.user.findFirst({
      where: {
        nameUser: nameUser,
      },
    });

    if (nameUserAlreadyExist) {
      throw new Error("userName already registered!!!");
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        nameUser,
        email,
        gender,
      },
    });

    return { user };
  }
}

export { CreateUserService };
