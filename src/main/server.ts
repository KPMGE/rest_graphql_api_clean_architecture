import app from "./config/app";
import { env } from "./config/env";

app.listen(env.port, () =>
  console.log(`server listening on port ${env.port}...`)
);
