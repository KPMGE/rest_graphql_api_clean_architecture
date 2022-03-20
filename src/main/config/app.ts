import express from "express";
import { setupAppolloServer } from "./appollo-server";
import { setupRoutes } from "./routes";

const app = express();

setupAppolloServer(app);
setupRoutes(app);

export default app;
