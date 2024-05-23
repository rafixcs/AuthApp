import { Controller } from "../interfaces/controller";
import { HttpRequest, HttpResponse } from "../interfaces/http";

export class BasicAuthController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    
    const message = "Hello from basic auth";
    const response: HttpResponse = { 
      body: {
        message
      },
      status: 200
    };

    return response;
  }

}
