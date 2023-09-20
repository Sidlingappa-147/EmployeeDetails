import employeeService from "./employee.service.js";

class EmployeeController {
  async addEmployee(req, res, next) {
    /* #swagger.tags = ['Employee']
                           #swagger.description = 'This routes is used for creating an organization with Employee Details'  */

    /*	#swagger.parameters['data'] = {
                                in: 'body',
                                description: 'Employee  Details',
                                required: true,
                                schema: { $ref: "#/definitions/EmployeeDetails" }
        }*/
    /*  #swagger.responses[200] = {
                                description: 'Success',   
                                schema: { $ref: "#/definitions/SuccessMessage" }                  
        }*/
    /*  #swagger.responses[400] = {
                                description: 'Fail response',   
                                schema: { $ref: "#/definitions/FailMessage" }                  
        }*/
    return await employeeService.addEmployee(req, res, next);
  }

  async updateEmployee(req, res, next) {
    /* #swagger.tags = ['Update Employee']
                           #swagger.description = 'This routes is used for Updating an organization with Employee Details'  */

    /*	#swagger.parameters['what_to_update'] = {
                            in: 'query',
                            description: 'enter value what to update',
    } */
    /*	#swagger.parameters['where_to_update'] = {
                            in: 'query',
                            description: 'enter value where to update',
    } */
    return await employeeService.updateEmployee(req, res, next);
  }

  async deleteEmployee(req, res, next) {
    /* #swagger.tags = ['delete Employee']
                           #swagger.description = 'This routes is used for deleting an organization with Employee Details'  */

    /*	#swagger.parameters['email'] = {
                            in: 'query',
                            description: 'enter email to delete this employee',
    } */
    return await employeeService.deleteEmployee(req, res, next);
  }

  async findAllEmployee(req, res, next) {
    /* #swagger.tags = ['Get All Employee']
                           #swagger.description = 'This routes is used for fetching an organization with Employee Details'  */

    return await employeeService.findAllEmployee(req, res, next);
  }
}

export default new EmployeeController();
