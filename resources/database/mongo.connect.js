import pkg from "mongoose";

const { connect, set, connection } = pkg;

class MongoConnects {
  initialize() {
    return new Promise((resolve, reject) => {
      set("strictQuery", false);

      connect(`mongodb://127.0.0.1:27017/employee_details`);

      const db = connection;

      db.on("error", (error) => {
        reject(error.message);
      });
      db.once("open", () => {
        resolve("Mongodb connected!");
      });
    });
  }
}

export { MongoConnects, connection };
