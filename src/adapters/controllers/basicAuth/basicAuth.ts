import { Controller } from "../../interfaces/controller";
import { HttpRequest, HttpResponse } from "../../interfaces/http";
import { badRequest, created } from "../../presentation/api/httpReponses.ts/httpResponses";
import { ValidationComposite } from "../../validations/validationComposite";

export class BasicAuthController implements Controller {
  constructor(private readonly validator: ValidationComposite) {}
  handle(httpRequest: HttpRequest): HttpResponse {
    
    const error = this.validator.validate(httpRequest.body);
    if(error) {
      return badRequest(error);
    }

    const { username, pass } = httpRequest.body;

    // find user in database
    // check if the password match
    // if it matches, login the account
    

    return created({message: "Hello from basic auth"});
  }
}
