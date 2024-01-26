import prismaClient from "../../../prisma";
import { IDeleteUser } from "../dto/IDeleteUser";

class DeleteUserService {
  async execute({ id }: IDeleteUser) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    await prismaClient.user.delete({
      where: {
        id: user.id,
      },
    });

    return { message: "User successfully deleted!!!" };
  }
}

export { DeleteUserService };
