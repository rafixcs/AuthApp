import { Controller } from "./interfaces/controller";
import { HttpRequest, HttpResponse } from "./interfaces/http";
import { Request, Response } from "express";

export const expressRouteAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const request: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query
    };
    
    const response = await controller.handle(request);
    
    if (response.status === 200 || response.status === 204 || response.status === 201) {
      res.status(response.status).json(response.body);
    } else {
      res.status(response.status).json({ error: response.body.message });
    }
  };
};

