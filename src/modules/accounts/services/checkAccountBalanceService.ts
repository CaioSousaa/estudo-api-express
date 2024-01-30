import prismaClient from "../../../prisma";
import { ICheckAccountBalance } from "../dto/CheckAccountBalanceDTO";

class CheckAccountBalanceService {
  async execute({ userId, password }: ICheckAccountBalance) {
    if (!password) {
      throw new Error("enter password");
    }

    const accountCheck = await prismaClient.account.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!accountCheck) {
      throw new Error("non-existent account or unregistered account");
    }

    const checkPassword = accountCheck.password;

    if (password !== checkPassword) {
      throw new Error("incorrect password!!!");
    }

    const balance = accountCheck.balance;

    return balance;
  }
}

export { CheckAccountBalanceService };
