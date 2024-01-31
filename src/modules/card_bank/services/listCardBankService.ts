import prismaClient from "../../../prisma";

class ListCardBankService {
  async execute() {
    const listCards = await prismaClient.cardBank.findMany();

    return listCards;
  }
}

export { ListCardBankService };
