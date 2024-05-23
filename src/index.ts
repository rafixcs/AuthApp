import app from "./adapters/presentation/api/config/app";
import env from "./adapters/presentation/api/config/env";

app.listen(env.port, ()=>{
  console.log(`Server is running on port http://localhost:${env.port}`);
});
