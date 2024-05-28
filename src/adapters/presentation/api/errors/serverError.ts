
export class ServerError extends Error {
  constructor(stack?: string) {
    super("Internal Serve Error");
    this.name = "ServerError";
    this.stack = stack;
  }
}
