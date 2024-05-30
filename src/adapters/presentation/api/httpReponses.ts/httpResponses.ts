import { HttpResponse } from "../../../interfaces/http";
import { ServerError } from "../errors/serverError";

export const created = (data: any): HttpResponse => ({
  body: data,
  status: 201,
});

export const badRequest = (error: Error): HttpResponse => ({
  status: 400,
  body: error,
});

export const serverError = (error: Error): HttpResponse => ({
  status: 500,
  body: new ServerError(error.stack as string),
});

export const noContent = (): HttpResponse => ({
  status: 204,
});
