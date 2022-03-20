import { adaptResolver } from "../../adapters";
import { makeLoadLastRankingController } from "../../factories";

export default {
  Query: {
    async lastRanking() {
      const controller = makeLoadLastRankingController();
      return adaptResolver(controller);
    },
  },
};
