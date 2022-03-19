import { LastRankingLoader } from "../../domain/useCases";
import { Controller, HttpResponse, serverError, ok } from "../contracts";
import { RankingScoreViewModel } from "../view-models";

export class LoadLastRankingController implements Controller {
  constructor(private readonly lastRankingLoader: LastRankingLoader) {}

  // here, we're returning our own HttpResponse, this will allow us reuse all of this logic
  // in a lot of different contexts
  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const rankings = await this.lastRankingLoader.load();

      // here, we're adapting the data from our lastRankingLoader to match the data
      // we wanna return for the user.
      const adaptedRankings = RankingScoreViewModel.mapCollection(rankings);

      return ok(adaptedRankings);
    } catch (error) {
      return serverError(error);
    }
  }
}
