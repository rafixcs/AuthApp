import { create } from "domain";
import { GetAccount } from "../../../usecases/basicAuth/getAccount";
import { AccountLoginModel, AccountModel, ConsultAccountModel } from "../../../usecases/basicAuth/repository/models/account.model";
import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { AccountNotFound } from "../../presentation/api/errors/accountNotFound";
import { badRequest, created, noContent } from "../../presentation/api/httpReponses.ts/httpResponses";
import { ValidationComposite } from "../../validations/validationComposite";
import { FailedToLogin } from "../../presentation/api/errors/FailedToLogin";
import { LoginAccount } from "../../../usecases/basicAuth/loginAccount";
import { BcryptHashing } from "../../../services/encript/bcrypt";
import { hash } from "crypto";

export class BasicAuthController implements Controller {
  constructor(
    private readonly validator: ValidationComposite,
    private readonly getAccount: GetAccount,
    private readonly loginAccount: LoginAccount
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    
    const error = this.validator.validate(httpRequest.body);
    if(error) {
      return badRequest(error);
    }

    const { username, pass } = httpRequest.body;
    const consultAccount = {
      username
    };

    let isValid: boolean = false;

    try {
      const account = await this.getAccount.get(consultAccount);

      const hashService = new BcryptHashing();
      isValid = await hashService.compareContent(pass, account.pass);

      if(!isValid) {
        return badRequest(new FailedToLogin());
      }

      const loginAccount: AccountLoginModel = {
        username,
        email: account.email,
        isLoged: false
      };

      await this.loginAccount.login(loginAccount);
      isValid = true;
    } catch (error) {
      if(error instanceof Error){
        return badRequest(error);
      }
    }
    
    if(isValid){
      return noContent();
    }
    else {
      return badRequest(new FailedToLogin());
    }
  }
}
