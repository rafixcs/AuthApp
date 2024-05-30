
export class AccountNotFound extends Error {
  constructor(account: string) {
    super(`Account ${account} not found`);
    this.name = "AccountNotFound";
  }

}
