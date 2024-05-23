import { Router } from "express";
import { expressRouteAdapter } from "../../../expressRouteAdapter";
import { basicAuthFactory } from "../../../factories/basicAuth.factory";

export default (router: Router): void => {
  router.get("/basicAuth", expressRouteAdapter(basicAuthFactory()));
};
