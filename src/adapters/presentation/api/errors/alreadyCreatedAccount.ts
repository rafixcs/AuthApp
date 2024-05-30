
export class AlreadyCreatedAccount extends Error {
  constructor(account: string) {
    super(`Account ${account} already created`);
    this.name = "AlreadyCreatedAccount";
  }
}
