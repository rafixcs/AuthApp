import app from "./adapters/presentation/api/config/app";
import env from "./adapters/presentation/api/config/env";
import { MongoManager } from "./adapters/presentation/api/config/mongoManager";

const dbConnector = MongoManager.getInstance();
dbConnector.connect(env.mongoUrl).then(() => {
  app.listen(env.port, ()=>{
    console.log(`Server is running on port http://localhost:${env.port}`);
  });
}).catch(console.error);

