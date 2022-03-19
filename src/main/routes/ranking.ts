import { Router } from "express";
import { adaptRoute } from "../adapters/express-router";
import { makeLoadLastRankingController } from "../factories";

export default (router: Router): void => {
  // here, we're using the adapter and the factory to set up our route.
  router.get("/rankings/last", adaptRoute(makeLoadLastRankingController()));
};
