import { ValidationComposite } from "../../../validations/validationComposite";
import { Validation } from "../../../interfaces/validation";
import { RequiredFieldsValidation } from "../../../validations/requiredFieldsValidation";

export const registerAccountValidationFactory = () : ValidationComposite => {
  const validations: Validation[] = [];

  for(const field of ["email", "username", "pass"]) {
    validations.push(new RequiredFieldsValidation(field));
  }

  // TODO:
  // * validate email

  return new ValidationComposite(validations);
};
