// NOTE: we know that, this repository will be used in the infrastructure layer, so it's a good
// practice to create a DTO for the function return, otherwise, our infrastrucre layer would know
// about details in the domain layer, which is not good.

import { RankingScoreDTO } from "../DTO";

export interface LoadLastRankingRepository {
  loadLastRanking: () => Promise<RankingScoreDTO[]>;
}
