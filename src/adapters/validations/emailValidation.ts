import { Validation } from "../interfaces/validation";
import { InvalidEmailError } from "../presentation/api/errors/emailInvalid";

export class EmailValidation implements Validation {
  validate(data: any): void | Error {
    const emailValidation = new RegExp(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/);
    if(!emailValidation.test(data.email)) {
      return new InvalidEmailError(data.email);
    }
  }

}
