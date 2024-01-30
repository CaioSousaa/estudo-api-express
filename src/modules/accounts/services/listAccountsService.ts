import prismaClient from "../../../prisma";

class ListAccountsService {
  async execute() {
    const listAccounts = await prismaClient.account.findMany();

    return listAccounts;
  }
}

export { ListAccountsService };
