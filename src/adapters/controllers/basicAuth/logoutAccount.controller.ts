import { LogoutAccount } from "../../../usecases/basicAuth/logoutAccount";
import { AccountLogoutModel } from "../../../usecases/basicAuth/repository/models/account.model";
import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Validation } from "../../interfaces/validation";
import { badRequest, noContent } from "../../presentation/api/httpReponses.ts/httpResponses";

export class LogoutAccountController implements Controller {
  constructor(
    private readonly validator: Validation,
    private readonly logoutAccount: LogoutAccount
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validator.validate(httpRequest.body);
    if(error) {
      return badRequest(error);
    }

    const account: AccountLogoutModel = {
      username: httpRequest.body.username
    };

    if(httpRequest.body.email) {
      account.email = httpRequest.body.email;
    }

    try {
      await this.logoutAccount.logout(account);
    } catch (error) {
      if(error instanceof Error) {
        return badRequest(error);
      }
    }

    return noContent();
  }
    
}
