import express from "express";
import bodyParser from "body-parser";
import MongoConnect from "./resources/database/mongo.database.js";
import Routes from "./resources/routes/public.routes.js";
import swaggerUi from "swagger-ui-express";
const mongoConnect = new MongoConnect();
const app = express();
const port = 3000;
import specs from "./swagger_outout.json" assert { type: "json" };
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/explorer", swaggerUi.serve, swaggerUi.setup(specs));
app.get("/", (req, res) => res.redirect("/explorer"));

mongoConnect
  .initialize()
  .then(() => {
      const routes =new Routes(app);
      return routes;
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
