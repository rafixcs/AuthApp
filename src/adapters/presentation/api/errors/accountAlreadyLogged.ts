
export class AccountAlreadyLogged extends Error {
  constructor() {
    super("Account already logged");
    this.name = "AccountAlreadyLogged";
  } 
}
