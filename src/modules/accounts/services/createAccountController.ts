import prismaClient from "../../../prisma";
import { ICreateAccoutnDTO, CreateAccountDTO } from "../dto/CreateAccountDTO";
import { v4 as uuid } from "uuid";

class CreateAccountService {
  async execute(
    {
      description,
      type_account,
      password,
      userId,
      transfer_key,
    }: ICreateAccoutnDTO,
    { balance }: CreateAccountDTO
  ) {
    if (!description || !password || !type_account) {
      throw new Error("Fill in the fields!!!");
    }

    const userExist = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userExist) {
      throw new Error("User do not exist");
    }

    const accountExist = await prismaClient.account.findFirst({
      where: {
        id: userExist.id,
      },
    });

    if (accountExist) {
      throw new Error("the customer already has an account");
    }

    const createAccount = await prismaClient.account.create({
      data: {
        id: uuid(),
        userId: userExist.id,
        name: userExist.nameUser,
        balance,
        description,
        password,
        transfer_key,
        type_account,
      },
    });

    return createAccount;
  }
}

export { CreateAccountService };
