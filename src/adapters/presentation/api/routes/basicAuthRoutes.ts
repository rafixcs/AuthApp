import { Router } from "express";
import { expressRouteAdapter } from "../../../expressRouteAdapter";
import { basicAuthFactory } from "../../../factories/basicAuth/basicAuth.factory";
import { registerAccountFactory } from "../../../factories/basicAuth/registerAccount.factory";
import { logoutAccountFactory } from "../../../factories/basicAuth/logoutAccount.factory";

export default (router: Router): void => {
  router.post("/basicAuth", expressRouteAdapter(basicAuthFactory()));
  router.post("/basicAuth/register", expressRouteAdapter(registerAccountFactory()));
  router.post("/basicAuth/logout", expressRouteAdapter(logoutAccountFactory()));
};
