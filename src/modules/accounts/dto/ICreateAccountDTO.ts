interface ICreateAccoutnDTO {
  description: string;
  type_account: string;
  password: string;
  userId: string;
  transfer_key: string;
}

class CreateAccountDTO {
  balance: number;

  constructor() {
    this.balance = 0.0;
  }
}

export { ICreateAccoutnDTO, CreateAccountDTO };
