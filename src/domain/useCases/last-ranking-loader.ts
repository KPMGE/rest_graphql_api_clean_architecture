import { RankingScore } from "../entities";

export interface LastRankingLoader {
  load: () => Promise<RankingScore[]>;
}
