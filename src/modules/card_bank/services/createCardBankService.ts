import prismaClient from "../../../prisma";
import { ICreateCardBankDTO } from "../dto/CreateCardBankDTO";
import { v4 as uuid } from "uuid";

class CreateCardBankService {
  async execute({ password, userId }: ICreateCardBankDTO) {
    const user = await prismaClient.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("the user does not exist");
    }

    const account = await prismaClient.account.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (!account) {
      throw new Error("the account does not exist");
    }

    const userAlreadyCard = await prismaClient.cardBank.findFirst({
      where: {
        userId: user.id,
      },
    });

    if (userAlreadyCard) {
      throw new Error("user already has a card");
    }

    const currentDate = new Date();
    const invoiceClosing = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    const expiration = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 2,
      1
    );

    const cardBank = await prismaClient.cardBank.create({
      data: {
        id: uuid(),
        userId: user.id,
        name: user.name,
        password,
        transfer_key: account.transfer_key,
        typeCard: account.type_account,
        invoiceClosing,
        expiration,
      },
    });
    return cardBank;
  }
}

export { CreateCardBankService };
