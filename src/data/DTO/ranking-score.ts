import { RankingScore } from "../../domain/entities";

// That's the object that's gonna be returned from the service. here, as all
// properties are equal in the server and the domain, we can just assign them like
// that, but we could have different naming or different return types too, it would
// be really easy to set up, cuz all data transfer is managed here, we know precisely
// where we're supposed to make the change!!
export type RankingScoreDTO = RankingScore;
