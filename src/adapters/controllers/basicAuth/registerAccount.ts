import { GetAccount } from "../../../usecases/basicAuth/getAccount";
import { RegisterAccount } from "../../../usecases/basicAuth/registerAccount";
import { AccountModel, ConsultAccountModel } from "../../../usecases/basicAuth/repository/models/account.model";
import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Validation } from "../../interfaces/validation";
import { AccountNotFound } from "../../presentation/api/errors/accountNotFound";
import { AlreadyCreatedAccount } from "../../presentation/api/errors/alreadyCreatedAccount";
import { badRequest, created, serverError } from "../../presentation/api/httpReponses.ts/httpResponses";

export class RegisterAccountController implements Controller {
  constructor(
    private readonly validator: Validation,
    private readonly getAccount: GetAccount,
    private readonly registerAccount: RegisterAccount
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validator.validate(httpRequest.body);
    if(error) {
      return badRequest(error);
    }

    const { email, username, pass } = httpRequest.body;

    const consultAccount: ConsultAccountModel = {
      email,
      username
    };

    try {
      await this.getAccount.get(consultAccount);
      const error = new AlreadyCreatedAccount(username);
      return badRequest(error);
    } catch (error) {
      if(error instanceof AccountNotFound) {
        const createAccount: AccountModel = {
          email,
          username,
          pass
        };

        await this.registerAccount.create(createAccount).catch((error) => {
          return serverError(error);
        });
      }
    }

    return created({message: `User ${username} created`});
  }
}
