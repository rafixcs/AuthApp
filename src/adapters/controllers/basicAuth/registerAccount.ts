import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { Validation } from "../../interfaces/validation";
import { badRequest, created } from "../../presentation/api/httpReponses.ts/httpResponses";

export class RegisterAccountController implements Controller {
  constructor(private readonly validator: Validation) {}
  handle(httpRequest: HttpRequest): HttpResponse {
    const error = this.validator.validate(httpRequest.body);
    if(error) {
      return badRequest(error);
    }

    // check if the account already exists
    // if exists return an error
    // else store a new account with password hashed

    return created({message: "Hello from register account"});
  }
}
