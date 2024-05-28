import { Validation } from "../interfaces/validation";

export class EmailValidation implements Validation {
  validate(data: any): void | Error {
    throw new Error("Method not implemented.");
  }

}
