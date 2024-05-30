
export class FailedToLogin extends Error {
  constructor() {
    super("Failed to login");
    this.name = "FailedToLogin";
  }
}
