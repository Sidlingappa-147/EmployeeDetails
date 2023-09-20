import { MongoConnects } from "./mongo.connect.js";

class MongoConnect {
  async initialize() {
    const mongoConnect = new MongoConnects();
    try {
      mongoConnect.initialize();
      console.log("Mongo Database has been connected.");
    } catch (error) {
      console.log(`Mongo issues : ${error}`);
    }
  }
}

export default MongoConnect;
