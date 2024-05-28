import { Validation } from "../interfaces/validation";

export class RequiredFieldsValidation implements Validation {
  constructor(private readonly field: string) {}
  validate(data: any): void | Error {
    if(!data[this.field]) {
      return new Error(this.field);
    }
  }

}
