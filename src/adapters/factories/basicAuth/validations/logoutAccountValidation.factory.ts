import { Validation } from "../../../interfaces/validation";
import { RequiredFieldsValidation } from "../../../validations/requiredFieldsValidation";
import { ValidationComposite } from "../../../validations/validationComposite";

export const logoutAccountValidationsFactory = () : ValidationComposite => {

  const validations: Validation[] = [];

  validations.push(new RequiredFieldsValidation("username"));

  return new ValidationComposite(validations);
};
