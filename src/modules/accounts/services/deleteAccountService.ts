import prismaClient from "../../../prisma";
import { IDeleteAccount } from "../dto/IDeleteAccountDTO";

class DeleteAccountService {
  async execute({ id }: IDeleteAccount) {
    const account = await prismaClient.account.findFirst({
      where: {
        id: id,
      },
    });

    if (!account) {
      throw new Error("account not exist");
    }

    await prismaClient.account.delete({
      where: {
        id: account.id,
      },
    });

    return { message: "account successfully deleted!!!" };
  }
}

export { DeleteAccountService };
