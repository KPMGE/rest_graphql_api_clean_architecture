import { ApolloServer } from "apollo-server-express";
import { Express } from "express";

import typeDefs from "../graphql/type-defs";
import resolvers from "../graphql/resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

export const setupAppolloServer = async (app: Express) => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()], // enables the graphql playground
  });

  await server.start();

  server.applyMiddleware({ app }); // creates a /graphql route automatically
};
