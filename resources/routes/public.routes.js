import employee from "../../core/employee/employee.routes.js";
class Routes {
  constructor(app) {
    app.use("/v1/employee", employee);  }
}
export default Routes;
