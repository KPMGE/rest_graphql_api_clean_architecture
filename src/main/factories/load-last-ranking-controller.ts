import { LastrankingLoaderService } from "../../data/services";
import { FakeRankingRepository } from "../../infra/repositories";
import { Controller } from "../../presentation/contracts";
import { LoadLastRankingController } from "../../presentation/controllers";

// this is a factory, it's a design pattern quite useful when creating complex instances,
//just like our controller.
export const makeLoadLastRankingController = (): Controller => {
  const repo = new FakeRankingRepository();
  const loaderService = new LastrankingLoaderService(repo);
  return new LoadLastRankingController(loaderService);
};
