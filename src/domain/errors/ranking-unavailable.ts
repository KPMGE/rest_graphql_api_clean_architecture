export class RankingUnavailableError extends Error {
  constructor() {
    super("Ranking Unavailable");
    this.name = "RankingUnavailableError";
  }
}
