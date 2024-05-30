import { ValidationComposite } from "../../../validations/validationComposite";
import { Validation } from "../../../interfaces/validation";
import { RequiredFieldsValidation } from "../../../validations/requiredFieldsValidation";
import { EmailValidation } from "../../../validations/emailValidation";

export const registerAccountValidationFactory = () : ValidationComposite => {
  const validations: Validation[] = [];

  for(const field of ["email", "username", "pass"]) {
    validations.push(new RequiredFieldsValidation(field));
  }

  validations.push(new EmailValidation());

  return new ValidationComposite(validations);
};
