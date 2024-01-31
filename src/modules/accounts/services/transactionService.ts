import prismaClient from "../../../prisma";
import { ITransactionDTO } from "../dto/ITransactionDTO";

class TransactionService {
  async execute({
    id_accountOne,
    id_accountTwo,
    password,
    transfer_key,
    value_transfer,
  }: ITransactionDTO) {
    const accountOne = await prismaClient.account.findUnique({
      where: {
        id: id_accountOne,
      },
    });

    if (!accountOne) {
      throw new Error("the account does not exist");
    }

    if (!password) {
      throw new Error("enter password to proceed");
    }

    if (password !== accountOne.password) {
      throw new Error("the password is incorrect");
    }

    const accountTwo = await prismaClient.account.findUnique({
      where: {
        id: id_accountTwo,
      },
    });

    if (!accountTwo) {
      throw new Error("the account does not exist");
    }

    if (transfer_key !== accountTwo.transfer_key) {
      throw new Error("invalid transfer key");
    }

    if (value_transfer > accountOne.balance) {
      throw new Error("balance unavailable for transfer");
    }

    const balanceAccountOne = Number(accountOne.balance - value_transfer);

    const readjustmentAccountOne = await prismaClient.account.update({
      where: {
        id: accountOne.id,
      },
      data: {
        balance: balanceAccountOne,
      },
    });

    const balanceAccountTwo = accountTwo.balance.toString();
    const addBalanceAccountTwo =
      parseFloat(balanceAccountTwo) + Number(value_transfer);

    const readjustmentAccountTwo = await prismaClient.account.update({
      where: {
        id: accountTwo.id,
      },
      data: {
        balance: Number(addBalanceAccountTwo),
      },
    });

    return { readjustmentAccountOne, readjustmentAccountTwo };
  }
}

export { TransactionService };
