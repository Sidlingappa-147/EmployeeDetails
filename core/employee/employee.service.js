import employeeSchema from "./employee.model.js";
import employeeValidate from "./employee.validate.js";

class EmployeeService {
  async addEmployee(req, res) {
    try {
      const data = req?.body;
      const { error, value } = await employeeValidate.createEmployee(req.body);
      console.log(error, value);

      if (error) return res.send("validation failed");
      const { email: userEmail } = req.body;
      const duplicateData = await employeeSchema.findOne({ email: userEmail });
      if (duplicateData) {
        if (duplicateData.email === userEmail)
          return res.send("employee email already exist");
      } else {
        data.email = data.email.toLowerCase();
        const resultData = await employeeSchema.create(data);
        res.send(resultData);
      }
    } catch (error) {
      res.send(error.message);
    }
  }

  async updateEmployee(req, res) {
    const { what_to_update, where_to_update } = req?.query;
    if (what_to_update && where_to_update) {
      const update = { firstname: what_to_update };
      const filter = { email: where_to_update };
      await employeeSchema.findOneAndUpdate(filter, update);
      const updatedResult = await employeeSchema.findOne(filter);
      console.log(updatedResult);
      res.send(updatedResult);
    } else {
      res.send("invalid data");
    }
  }

  async deleteEmployee(req, res) {
    const { email } = req?.query;
    if (email) {
      await employeeSchema.findOneAndDelete({ email: email });
      res.send("data deleted successfully");
    } else {
      res.send("enter valid email");
    }
  }

  async findAllEmployee(req, res) {
    try {
      const result = await employeeSchema.find();
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  }
}

export default new EmployeeService();
