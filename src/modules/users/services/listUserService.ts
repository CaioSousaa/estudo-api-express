import prismaClient from "../../../prisma";

class ListUserService {
  async execute() {
    const listUser = await prismaClient.user.findMany();

    return listUser;
  }
}

export { ListUserService };
