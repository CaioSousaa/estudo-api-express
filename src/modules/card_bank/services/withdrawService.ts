import prismaClient from "../../../prisma";
import { IWithdrawDTO } from "../dto/IWithdrawDTO";

class WithdrawService {
  async execute({ password, userId, value }: IWithdrawDTO) {
    const userAccount = await prismaClient.account.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!userAccount) {
      throw new Error("account does not exist");
    }

    const accountCard = await prismaClient.cardBank.findUnique({
      where: {
        userId: userId,
      },
    });

    if (!accountCard) {
      throw new Error("the user does not have a card");
    }

    if (!password || password !== accountCard.password) {
      throw new Error("insert passeord or invalid password");
    }

    if (value > userAccount.balance) {
      throw new Error("unavailable balance");
    }

    const withdraw = userAccount.balance - value;

    const newBalance = await prismaClient.account.update({
      where: {
        id: userAccount.id,
      },
      data: {
        balance: withdraw,
      },
    });
    return newBalance;
  }
}

export { WithdrawService };
