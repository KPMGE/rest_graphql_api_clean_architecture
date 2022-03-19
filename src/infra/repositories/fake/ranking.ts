import { LoadLastRankingRepository } from "../../../data/contracts";
// here, we see that our infrastructure layer only knows about the data layer.
// this is because we've created the RankingScoreDTO, otherwise we would be enforced
// to point to the domain layer, which is not a good practice.
import { RankingScoreDTO } from "../../../data/DTO";
import { ranking } from "../../data-sources";

export class FakeRankingRepository implements LoadLastRankingRepository {
  async loadLastRanking(): Promise<RankingScoreDTO[]> {
    // Here, we're adapting the data that we get from the api or other place
    // to match the data in our domain. This is a really good practice, cuz
    // oftentimes, the format we like to use doesn't match the data returned
    // by our provider. So that, by doing this mapper, we can use that data
    // without modifing our api.
    return ranking.map((item) => ({
      player: item.user,
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes,
    }));
  }
}
