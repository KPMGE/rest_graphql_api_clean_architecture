import express from "express";
import { setupRoutes } from "./routes";

const app = express();
setupRoutes(app);

export default app;
