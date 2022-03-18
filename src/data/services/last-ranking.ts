import { RankingScore } from "../../domain/entities";
import { RankingUnavailableError } from "../../domain/errors";
import { LastRankingLoader } from "../../domain/useCases";
import { LoadLastRankingRepository } from "../contracts";

export class LastrankingLoaderService implements LastRankingLoader {
  constructor(
    // here, we're using the dependency inversion principle. Basically,
    // we'll not depend on a concrete class, but in an interface, so that,
    // we can change the concrete class and, as long as it implements the interface
    // LoadLastRankingRepository, everything is supposed to work just fine.
    private readonly lastRankingLoaderRepository: LoadLastRankingRepository
  ) {}

  async load(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      // when our application has a really important error, it's a good practice to
      // create a custom one.
      throw new RankingUnavailableError();
    }

    return this.lastRankingLoaderRepository.loadLastRanking();
  }
}
