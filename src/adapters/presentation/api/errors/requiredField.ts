
export class RequiredFieldError extends Error {
  constructor(field?: string) {
    super(`Missing Parameter ${field}`);
    this.name = "RequiredField";
  }
}
  