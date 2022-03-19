// once again, we're creating this in order to not depend on the model and domain layers,
// moreover, our entity for the presentation layer is a little bit different compared to
// the domain layer one. Basically, we don't wanna return a Date, we want to return a ISO-formated
// date, so it'll be actually a string in this case.

import { RankingScoreDTO } from "../../data/DTO";

export class RankingScoreViewModel {
  player: Player;
  score: number;
  matchDate: string;
  heroes: Hero[];

  // this is an adapter, we're making the data from our data layer match the data
  // we want to return for the user, so that, we end up using and adapter.
  // Specifically in this case, cuz we want to return the data as an ISO string for the user
  // but, at the same time, we wanna be able to use it as a Date inside the program.
  static map(entity: RankingScoreDTO): RankingScoreViewModel {
    return {
      ...entity,
      matchDate: entity.matchDate.toISOString(),
    };
  }

  // here, we're just adapting a list of entities
  static mapCollection(entities: RankingScoreDTO[]): RankingScoreViewModel[] {
    return entities.map((entity) => RankingScoreViewModel.map(entity));
  }
}

type Player = {
  name: string;
  country: string;
};

type Hero = {
  name: string;
  level: number;
};
